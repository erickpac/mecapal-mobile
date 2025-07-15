import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <SafeAreaView
      className={`flex-1 bg-white ${className}`}
      edges={["top", "bottom", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};
