import React, { useState, useRef } from 'react';
import { useStore } from '@/store/useStore';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import { NavigationHeader } from '@/components/navigation-header';
import SubheaderText from '@/components/subheader-text';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { MaterialSymbol } from '@/components/material-symbol';

const { height: screenHeight } = Dimensions.get('window');

const AddAddressScreen = () => {
  const { user } = useStore();
  const userRole = user?.role || 'USER';
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [showDepartmentPicker, setShowDepartmentPicker] = useState(false);
  const [showMunicipalityPicker, setShowMunicipalityPicker] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    fullAddress: '',
    additionalInstructions: '',
  });

  // Form validation
  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      selectedDepartment !== '' &&
      selectedMunicipality !== '' &&
      formData.fullAddress.trim() !== ''
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      const addressData = {
        ...formData,
        department: selectedDepartment,
        municipality: selectedMunicipality,
        isDefault: isDefaultAddress
      };

      console.log('Address saved successfully:', addressData);
      // Here you would normally save the address to your backend/store

      // Reset form after successful submission
      setFormData({
        name: '',
        fullAddress: '',
        additionalInstructions: '',
      });
      setSelectedDepartment('');
      setSelectedMunicipality('');
      setIsDefaultAddress(false);
    } else {
      console.log('Form is not valid. Missing required fields.');
    }
  };

  const departments = [
    { label: 'Guatemala', value: 'Guatemala' },
    { label: 'Alta Verapaz', value: 'Alta Verapaz' },
    { label: 'Baja Verapaz', value: 'Baja Verapaz' },
    { label: 'Chimaltenango', value: 'Chimaltenango' },
    { label: 'Chiquimula', value: 'Chiquimula' },
    { label: 'El Progreso', value: 'El Progreso' },
    { label: 'Escuintla', value: 'Escuintla' },
    { label: 'Huehuetenango', value: 'Huehuetenango' },
    { label: 'Izabal', value: 'Izabal' },
    { label: 'Jalapa', value: 'Jalapa' },
    { label: 'Jutiapa', value: 'Jutiapa' },
    { label: 'Petén', value: 'Petén' },
    { label: 'Quetzaltenango', value: 'Quetzaltenango' },
    { label: 'Quiché', value: 'Quiché' },
    { label: 'Retalhuleu', value: 'Retalhuleu' },
    { label: 'Sacatepéquez', value: 'Sacatepéquez' },
    { label: 'San Marcos', value: 'San Marcos' },
    { label: 'Santa Rosa', value: 'Santa Rosa' },
    { label: 'Sololá', value: 'Sololá' },
    { label: 'Suchitepéquez', value: 'Suchitepéquez' },
    { label: 'Totonicapán', value: 'Totonicapán' },
    { label: 'Zacapa', value: 'Zacapa' },
  ];

  const municipalities = [
    { label: 'Guatemala City', value: 'Guatemala City' },
    { label: 'Mixco', value: 'Mixco' },
    { label: 'Villa Nueva', value: 'Villa Nueva' },
    { label: 'Petapa', value: 'Petapa' },
    { label: 'San Juan Sacatepéquez', value: 'San Juan Sacatepéquez' },
    { label: 'San Miguel Petapa', value: 'San Miguel Petapa' },
    { label: 'Chinautla', value: 'Chinautla' },
    { label: 'Santa Catarina Pinula', value: 'Santa Catarina Pinula' },
    { label: 'Fraijanes', value: 'Fraijanes' },
    { label: 'San José Pinula', value: 'San José Pinula' },
    { label: 'San José del Golfo', value: 'San José del Golfo' },
    { label: 'Palencia', value: 'Palencia' },
    { label: 'San Pedro Ayampuc', value: 'San Pedro Ayampuc' },
    { label: 'San Pedro Sacatepéquez', value: 'San Pedro Sacatepéquez' },
    { label: 'San Raymundo', value: 'San Raymundo' },
    { label: 'Chuarrancho', value: 'Chuarrancho' },
    { label: 'San Antonio Aguas Calientes', value: 'San Antonio Aguas Calientes' },
    { label: 'Santa Catarina Barahona', value: 'Santa Catarina Barahona' },
    { label: 'Magdalena Milpas Altas', value: 'Magdalena Milpas Altas' },
    { label: 'Pastores', value: 'Pastores' },
    { label: 'Santiago Sacatepéquez', value: 'Santiago Sacatepéquez' },
    { label: 'Santo Domingo Xenacoj', value: 'Santo Domingo Xenacoj' },
  ];

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <View className="flex-1 bg-white">
        <ScrollView
          className="flex-1 bg-white"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="px-6 pt-6">
            <SubheaderText
              title="Nueva dirección de Origen"
              onlyTitle
              align="left"
            />
            <Text className="mt-4 font-plus-jakarta text-base font-normal">
              A continuación llena los siguientes datos:
            </Text>
          </View>
          <View className="mt-8 px-6 pb-4">
            <View className="space-y-4 rounded-lg">
              <Input
                label="Nombre de esta dirección"
                value={formData.name}
                type="text"
                onChangeText={(value) => handleInputChange('name', value)}
              />

              <View className="mb-4">
                <TextInput
                  label="Departamento"
                  value={selectedDepartment}
                  mode="outlined"
                  editable={false}
                  onPressIn={() => setShowDepartmentPicker(true)}
                  right={
                    <TextInput.Icon
                      icon="chevron-down"
                      size={20}
                      color={COLORS.gray[600]}
                      onPress={() => setShowDepartmentPicker(true)}
                    />
                  }
                  outlineColor="#c4c4c4"
                  activeOutlineColor="#000"
                  contentStyle={{
                    fontSize: 16,
                    lineHeight: 22,
                    fontFamily: 'Plus Jakarta Sans Regular',
                  }}
                  style={{ backgroundColor: 'white' }}
                  outlineStyle={{ borderWidth: 1 }}
                />
              </View>

              <View className="mb-4">
                <TextInput
                  label="Municipio"
                  value={selectedMunicipality}
                  mode="outlined"
                  editable={false}
                  onPressIn={() => setShowMunicipalityPicker(true)}
                  right={
                    <TextInput.Icon
                      icon="chevron-down"
                      size={20}
                      color={COLORS.gray[600]}
                      onPress={() => setShowMunicipalityPicker(true)}
                    />
                  }
                  outlineColor="#c4c4c4"
                  activeOutlineColor="#000"
                  contentStyle={{
                    fontSize: 16,
                    lineHeight: 22,
                    fontFamily: 'Plus Jakarta Sans Regular',
                  }}
                  style={{ backgroundColor: 'white' }}
                  outlineStyle={{ borderWidth: 1 }}
                />
              </View>

              <Input
                label="Dirección Completa"
                value={formData.fullAddress}
                type="text"
                onChangeText={(value) => handleInputChange('fullAddress', value)}
              />
              <Input
                label="Indicaciones adicionales"
                value={formData.additionalInstructions}
                type="text"
                onChangeText={(value) => handleInputChange('additionalInstructions', value)}
              />
            </View>
          </View>

          <View className="px-6">
            <View className="flex-row items-center space-x-3">
              <Checkbox
                status={isDefaultAddress ? 'checked' : 'unchecked'}
                onPress={() => setIsDefaultAddress(!isDefaultAddress)}
                color={COLORS.primary}
                uncheckedColor={COLORS.gray}
              />
              <Text className="flex-1 font-plus-jakarta text-base text-gray-700">
                Convertir en dirección predeterminada
              </Text>
            </View>
          </View>
        </ScrollView>
        <View className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white px-6 py-6">
          <Button
            title={'Guardar Dirección'}
            onPress={handleSubmit}
            disabled={!isFormValid()}
            userType={userRole}
            variant="contained"
          />
        </View>
      </View>

      {/* Department Picker Modal */}
      <Modal
        visible={showDepartmentPicker}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowDepartmentPicker(false)}
      >
        <View className="flex-1 bg-black/30">
          <View className="flex-1 justify-end">
            <View
              className="transform rounded-t-3xl bg-white"
              style={{
                animation: 'slideUp 0.3s ease-out',
              }}
            >
              <View className="flex-row items-center justify-between border-b border-gray-100 px-6 pb-2 pt-4">
                <Text className="text-lg font-semibold text-gray-900">
                  Seleccionar Departamento
                </Text>
                <TouchableOpacity
                  onPress={() => setShowDepartmentPicker(false)}
                  className="p-1"
                >
                  <MaterialSymbol
                    name="close"
                    size={24}
                    color={COLORS.gray[600]}
                  />
                </TouchableOpacity>
              </View>

              <View className="px-6 py-4">
                <Picker
                  selectedValue={selectedDepartment}
                  onValueChange={(itemValue) =>
                    setSelectedDepartment(itemValue)
                  }
                  style={{ height: 200 }}
                  mode="dropdown"
                  itemStyle={{ fontSize: 16 }}
                >
                  {departments.map((department) => (
                    <Picker.Item
                      key={department.value}
                      label={department.label}
                      value={department.value}
                    />
                  ))}
                </Picker>
              </View>

              <View className="border-t border-gray-100 px-6 py-4">
                <Button
                  title="Confirmar"
                  onPress={() => setShowDepartmentPicker(false)}
                  userType={userRole}
                  variant="contained"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Municipality Picker Modal */}
      <Modal
        visible={showMunicipalityPicker}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowMunicipalityPicker(false)}
      >
        <View className="flex-1 bg-black/30">
          <View className="flex-1 justify-end">
            <View
              className="transform rounded-t-3xl bg-white"
              style={{
                animation: 'slideUp 0.3s ease-out',
              }}
            >
              <View className="flex-row items-center justify-between border-b border-gray-100 px-6 pb-2 pt-4">
                <Text className="text-lg font-semibold text-gray-900">
                  Seleccionar Municipio
                </Text>
                <TouchableOpacity
                  onPress={() => setShowMunicipalityPicker(false)}
                  className="p-1"
                >
                  <MaterialSymbol
                    name="close"
                    size={24}
                    color={COLORS.gray[600]}
                  />
                </TouchableOpacity>
              </View>

              <View className="px-6 py-4">
                <Picker
                  selectedValue={selectedMunicipality}
                  onValueChange={(itemValue) =>
                    setSelectedMunicipality(itemValue)
                  }
                  style={{ height: 200 }}
                  mode="dropdown"
                  itemStyle={{ fontSize: 16 }}
                >
                  {municipalities.map((municipality) => (
                    <Picker.Item
                      key={municipality.value}
                      label={municipality.label}
                      value={municipality.value}
                    />
                  ))}
                </Picker>
              </View>

              <View className="border-t border-gray-100 px-6 py-4">
                <Button
                  title="Confirmar"
                  onPress={() => setShowMunicipalityPicker(false)}
                  userType={userRole}
                  variant="contained"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddAddressScreen;
