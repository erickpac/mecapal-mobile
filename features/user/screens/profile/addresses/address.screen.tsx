import { View, Text, ScrollView, Pressable } from 'react-native'
import { Button } from "@/components/button";
import React, { useState } from 'react'
import { NavigationHeader } from "@/components/navigation-header";
import { useStore } from "@/store/useStore";
import { COLORS } from "@/consts/colors";
import { MaterialSymbol } from '@/components/material-symbol';
import { Input } from '@/components/input';

type Address = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

type Props = {}

const AddressScreen = (props: Props) => {
  const { user } = useStore();

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'Casa',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: true
    },
    {
      id: '2',
      name: 'Trabajo',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: false
    },
    {
      id: '3',
      name: 'Trabajo',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: false
    }
  ]);

  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newAddress, setNewAddress] = useState<Address>({
    id: '',
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Guatemala',
    isDefault: false
  });

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses(prev => prev.map(addr =>
        addr.id === editingAddress.id ? editingAddress : addr
      ));
      setEditingAddress(null);
    } else {
      const addressToAdd = {
        ...newAddress,
        id: Date.now().toString()
      };
      setAddresses(prev => [...prev, addressToAdd]);
      setNewAddress({
        id: '',
        name: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'Guatemala',
        isDefault: false
      });
      setShowAddForm(false);
    }
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  const renderAddressForm = (address: Address, isEditing: boolean = false) => (
    <View className="space-y-4">
      <Input
        label="Nombre de la dirección"
        value={address.name}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, name: value });
          } else {
            setNewAddress(prev => ({ ...prev, name: value }));
          }
        }}
      />
      <Input
        label="Calle"
        value={address.street}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, street: value });
          } else {
            setNewAddress(prev => ({ ...prev, street: value }));
          }
        }}
      />
      <Input
        label="Ciudad"
        value={address.city}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, city: value });
          } else {
            setNewAddress(prev => ({ ...prev, city: value }));
          }
        }}
      />
      <Input
        label="Departamento"
        value={address.state}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, state: value });
          } else {
            setNewAddress(prev => ({ ...prev, state: value }));
          }
        }}
      />
      <Input
        label="Código Postal"
        value={address.zipCode}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, zipCode: value });
          } else {
            setNewAddress(prev => ({ ...prev, zipCode: value }));
          }
        }}
      />
      <Input
        label="País"
        value={address.country}
        mode="flat"
        contentStyle={{ backgroundColor: COLORS.white }}
        style={{ backgroundColor: COLORS.white }}
        activeUnderlineColor="black"
        onChangeText={(value) => {
          if (isEditing && editingAddress) {
            setEditingAddress({ ...editingAddress, country: value });
          } else {
            setNewAddress(prev => ({ ...prev, country: value }));
          }
        }}
      />
    </View>
  );

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <View className="flex-1 bg-white">
        <ScrollView className="flex-1">
          <View className="px-6 pt-6">
            <Text className="text-2xl font-plus-jakarta-bold font-bold text-gray-900">Mis Direcciones</Text>
            <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-4">{"Estas son las direcciones para recoger tus cargas. Puedes ingresar hasta un máximo de 3."}</Text>
          </View>

          <View className="mt-6 px-6 pb-2 space-y-4">
            {addresses.map((address) => (
              <View key={address.id} className="bg-white  shadow-sm border-t border-b border-gray-100 p-4">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1 pr-4">
                    <View className="flex-row items-center gap-2">
                      <Text className="font-semibold text-gray-900 text-base leading-tight">{address.name}</Text>

                    </View>
                    <Text className=" text-gray-900 text-base leading-tight">{address.street}</Text>
                    <Text className="text-gray-600 text-sm mt-1">{address.city}, {address.state}, {address.zipCode}, {address.country}</Text>
                    {/* {address.isDefault && (
                      <View className="mt-3">
                        <Text className="text-sm text-green-600 font-medium">Dirección Predeterminada</Text>
                      </View>
                    )} */}
                  </View>
                  <View className="flex-row space-x-3">
                    <Pressable onPress={() => setEditingAddress(address)} className="p-1">
                      <MaterialSymbol name="edit" size={20} color={COLORS.primary} />
                    </Pressable>
                    <Pressable onPress={() => handleDeleteAddress(address.id)} className="p-1">
                      <MaterialSymbol name="delete" size={20} color={COLORS.error} />
                    </Pressable>
                  </View>
                </View>
                {/*!address.isDefault && (
                  <View className="mt-4">
                    <Button
                      title="Establecer como Predeterminada"
                      variant="outlined"
                      onPress={() => handleSetDefault(address.id)}
                      userType={user?.role}
                    />
                  </View>
                )*/}
              </View>
            ))}
          </View>

          {showAddForm && (
            <View className="mx-6 mb-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
                <Text className="text-lg font-semibold text-gray-900">Nueva Dirección</Text>
                <Pressable onPress={() => setShowAddForm(false)}>
                  <MaterialSymbol name="close" size={24} color={COLORS.gray[600]} />
                </Pressable>
              </View>
              <View className="p-4">
                {renderAddressForm(newAddress)}
                <View className="mt-6">
                  <Button
                    title="Guardar Dirección"
                    onPress={handleSaveAddress}
                    userType={user?.role}
                  />
                </View>
              </View>
            </View>
          )}

          {editingAddress && (
            <View className="mx-6 mb-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
                <Text className="text-lg font-semibold text-gray-900">Editar Dirección</Text>
                <Pressable onPress={() => setEditingAddress(null)}>
                  <MaterialSymbol name="close" size={24} color={COLORS.gray[600]} />
                </Pressable>
              </View>
              <View className="p-4">
                {renderAddressForm(editingAddress, true)}
                <View className="mt-6">
                  <Button
                    title="Guardar Cambios"
                    onPress={handleSaveAddress}
                    userType={user?.role}
                  />
                </View>
              </View>
            </View>
          )}


          <View className="pt-4 px-6 py-6">
            <Button
              title="Agregar Nueva Dirección"
              onPress={() => setShowAddForm(true)}
              userType={user?.role}
              variant="text"
              disabled={addresses.length >= 3}
            />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default AddressScreen;