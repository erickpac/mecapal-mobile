import { View, Text, ScrollView, Pressable } from 'react-native'
import { Button } from "@/components/button";
import React, { useState } from 'react'
import { NavigationHeader } from "@/components/navigation-header";
import { useTranslation } from "react-i18next";
import { TextInput } from 'react-native-paper';
import Avatar from "@/components/avatar";
import { useStore } from "@/store/useStore";
import { COLORS } from "@/consts/colors";
import { MaterialSymbol } from '@/components/material-symbol';
import { Input } from '@/components/input';
import { User, UserRole } from '@/features/auth/types/user';

type Props = {}

const InfoScreen = (props: Props) => {
  const { t } = useTranslation();
  const { user, setUser } = useStore();

  const [userEdit, setUserEdit] = useState(JSON.parse(JSON.stringify(user)));
  const [editingFields, setEditingFields] = useState<Set<string>>(new Set());
  const [editedFields, setEditedFields] = useState<Set<string>>(new Set());

  const handleEditPress = (field: string) => {
    if (editingFields.has(field)) {
      // Save the field
      setEditingFields(prev => {
        const newSet = new Set(prev);
        newSet.delete(field);
        return newSet;
      });
      setEditedFields(prev => new Set([...prev, field]));
      setUser(userEdit);
    } else {
      // Start editing the field
      setEditingFields(prev => new Set([...prev, field]));
    }
  };

  const handleSave = () => {
    setUser(userEdit);
    setEditingFields(new Set());
    setEditedFields(prev => new Set([...prev, ...editingFields]));
  };

  const renderEditButton = (field: string) => {
    const isEditing = editingFields.has(field);
    const isEdited = editedFields.has(field) && !isEditing;

    if (isEdited) return null; // Don't show edit button if field has been edited

    return (
      <Pressable
        className="absolute right-0 top-0 bottom-0 justify-center pr-2"
        onPress={() => handleEditPress(field)}
      >
        <View className="p-2">
          <MaterialSymbol
            name={isEditing ? 'check' : 'edit'}
            size={20}
            color={isEditing ? COLORS.primary : COLORS.black}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="text-2xl font-plus-jakarta-bold font-bold text-gray-800">{t("profile.personalInfo.title")}</Text>
        </View>
        <View className="items-center">
          <Avatar size={48} sizeEditButton={20} onPress={() => console.log("Edit avatar pressed")} />
        </View>
        <View className="mt-4 px-6 py-4 space-y-4">
          <View className="flex-row items-center">
            <View className="flex-1">
              <Input
                label="Nombre"
                value={userEdit?.name || ''}
                mode="flat"
                disabled={!editingFields.has('name') && !editedFields.has('name')}
                contentStyle={{ backgroundColor: COLORS.white }}
                style={{ backgroundColor: COLORS.white }}
                activeUnderlineColor="black"
                onChangeText={(value) => setUserEdit({ ...userEdit, name: value })}
              />
            </View>
            {renderEditButton('name')}
          </View>

          <View className="flex-row items-center">
            <View className="flex-1">
              <Input
                label="Numero de Telefono"
                value={userEdit?.phone || ''}
                mode="flat"
                disabled={!editingFields.has('phone') && !editedFields.has('phone')}
                contentStyle={{ backgroundColor: COLORS.white }}
                style={{ backgroundColor: COLORS.white }}
                activeUnderlineColor="black"
                onChangeText={(value) => setUserEdit({ ...userEdit, phone: value })}
              />
            </View>
            {renderEditButton('phone')}
          </View>

          <View className="flex-row items-center">
            <View className="flex-1">
              <Input
                label="Correo Electronico"
                value={userEdit?.email || ''}
                mode="flat"
                disabled={!editingFields.has('email') && !editedFields.has('email')}
                contentStyle={{ backgroundColor: COLORS.white }}
                style={{ backgroundColor: COLORS.white }}
                activeUnderlineColor="black"
                onChangeText={(value) => setUserEdit({ ...userEdit, email: value })}
              />
            </View>
            {renderEditButton('email')}
          </View>

          <View className="flex-row items-center">
            <View className="flex-1">
              <Input
                label="Tipo de Usuario"
                value={userEdit?.role === "USER" ? "Cliente" : "Transportista"}
                mode="flat"
                disabled={true}
                contentStyle={{ backgroundColor: COLORS.white }}
                style={{ backgroundColor: COLORS.white }}
                activeUnderlineColor="black"
              />
            </View>
          </View>
        </View>

        <View className="px-6 py-4">
          <Button
            disabled={editingFields.size === 0}
            title="Guardar Cambios"
            onPress={handleSave}
            userType={user?.role}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default InfoScreen;