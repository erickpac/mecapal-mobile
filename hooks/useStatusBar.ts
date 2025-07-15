import { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { COLORS } from "@/consts/colors";

export const useStatusBar = () => {
  const { user, selectedUserType } = useStore();
  const role = user?.role || selectedUserType;

  // Determine status bar background color based on role
  const statusBarColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;

  useEffect(() => {
    StatusBar.setBarStyle("light-content");

    // setBackgroundColor is only available on Android
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(statusBarColor);
    }
  }, [statusBarColor]);

  return {
    statusBarColor,
    role,
    isAndroid: Platform.OS === "android",
  };
};
