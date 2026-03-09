import React from 'react';
import { View } from 'react-native';
import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '@/consts/colors';
import { MekapalWhite } from '@/components/svg';

export const Header: React.FC<{ backgroundColor?: string }> = ({
  backgroundColor,
}) => {
  const insets = useSafeAreaInsets();
  const { user, selectedUserType } = useStore();
  const role = user?.role ?? selectedUserType;
  const defaultBgColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const finalBgColor = backgroundColor ?? defaultBgColor;
  const headerHeight = 56 + insets.top;
  const paddingTop = insets.top;

  return (
    <View
      className={['flex-row justify-center'].join(' ')}
      pointerEvents="box-none"
      style={{
        height: headerHeight,
        paddingTop,
        backgroundColor: finalBgColor,
      }}
    >
      <View className="items-center justify-center">
        <MekapalWhite />
      </View>
    </View>
  );
};
