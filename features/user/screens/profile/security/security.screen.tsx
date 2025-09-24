import { View, Text, ScrollView } from 'react-native'
import { Button } from "@/components/button";
import React, { useState } from 'react'
import { NavigationHeader } from "@/components/navigation-header";
import { useStore } from "@/store/useStore";
import { Input } from '@/components/input';
import { useTranslation } from 'react-i18next';

type SecuritySettings = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

type Props = {}

const SecurityScreen = () => {
  const { t } = useTranslation();
  const { user } = useStore();

  // Early return if no user
  if (!user) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-gray-600">No se pudo cargar la información del usuario</Text>
      </View>
    );
  }

  // Ensure user has a role
  const userRole = user.role || 'USER';

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async () => {
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      alert('Las contraseñas nuevas no coinciden');
      return;
    }

    if (securitySettings.newPassword.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSecuritySettings(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
      alert('Contraseña actualizada exitosamente');
    }, 2000);
  };


  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <View className="flex-1 bg-white">
        <ScrollView className="flex-1">
          <View className="px-8 pt-4">
            <Text className="text-2xl font-plus-jakarta-bold font-bold text-gray-800">Seguridad</Text>
            <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-4">{"Cambia tu contraseña"}</Text>
          </View>

          <View className="px-8 pb-4">
            <Text className="text-base font-plus-jakarta font-normal text-gray-800 my-4">{"Tu contraseña debe tener un mínimo de 8 caracteres, incluyendo letras, por lo menos un número y un símbolo."}</Text>

            <View className=" rounded-lg space-y-4">
              <Input
                label="Nueva Contraseña"
                value={securitySettings.newPassword}
                type="password"
                onChangeText={(value) => setSecuritySettings(prev => ({
                  ...prev,
                  newPassword: value
                }))}
              />

              <Input
                label="Confirmar Nueva Contraseña"
                value={securitySettings.confirmPassword}
                type="password"
                onChangeText={(value) => setSecuritySettings(prev => ({
                  ...prev,
                  confirmPassword: value
                }))}
              />
            </View>
          </View>
        </ScrollView>

        <View className="px-6 py-4 bg-white ">
          <Button
            title={loading ? "Actualizando..." : "Actualizar Contraseña"}
            onPress={handlePasswordChange}
            disabled={loading || !securitySettings.currentPassword || !securitySettings.newPassword}
            userType={userRole}
          />
        </View>
      </View>
    </>
  )
}

export default SecurityScreen;