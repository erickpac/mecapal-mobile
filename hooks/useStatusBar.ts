// src/hooks/useStatusBar.ts
import { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { COLORS } from "@/consts/colors"; // Asegúrate de que COLORS esté correctamente definido

export const useStatusBar = () => {
  const { user, selectedUserType } = useStore();
  const role = user?.role || selectedUserType;

  // Determina el color de fondo de la barra de estado según el rol
  const statusBarColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;

  useEffect(() => {
    // Establece el estilo de la barra a contenido claro para ambas plataformas
    StatusBar.setBarStyle("light-content", true);

    // Para Android, establece el color de fondo
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(statusBarColor, true);
    }
  }, [statusBarColor]); // Se ejecuta cada vez que statusBarColor cambia

  return {
    statusBarColor,
    role,
    isAndroid: Platform.OS === "android",
  };
};
