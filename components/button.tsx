import React, { ComponentProps, memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { UserRole } from '@/features/auth/types/user';
import { COLORS } from '@/consts/colors';

type PaperButtonProps = ComponentProps<typeof PaperButton>;

interface ButtonProps extends Omit<
  PaperButtonProps,
  'mode' | 'onPress' | 'children' | 'buttonColor' | 'textColor'
> {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  fullWidth?: boolean;
  buttonColor?: string;
  variant?: 'contained' | 'outlined' | 'text';
  userType?: UserRole;
}

const getButtonColor = (userType: UserRole) => {
  switch (userType) {
    case UserRole.TRANSPORTER:
      return COLORS.secondary;
    default:
      return COLORS.primary;
  }
};

const baseButtonStyle = { borderRadius: 8 };

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = '',
  buttonColor,
  variant = 'contained',
  userType = UserRole.CLIENT,
  ...props
}) => {
  const finalButtonColor = buttonColor ?? getButtonColor(userType);
  const isContained = variant === 'contained';
  const textColor = isContained ? COLORS.white : finalButtonColor;

  return (
    <PaperButton
      mode={variant}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      buttonColor={isContained ? finalButtonColor : 'transparent'}
      textColor={textColor}
      rippleColor={variant === 'text' ? 'transparent' : undefined}
      style={
        fullWidth
          ? {
              width: '100%',
              ...baseButtonStyle,
              borderWidth: variant === 'outlined' ? 1 : 0,
              borderColor:
                variant === 'outlined' ? finalButtonColor : 'transparent',
            }
          : {
              ...baseButtonStyle,
              borderWidth: variant === 'outlined' ? 1 : 0,
              borderColor:
                variant === 'outlined' ? finalButtonColor : 'transparent',
            }
      }
      contentStyle={{ height: variant === 'outlined' ? 42 : 44 }}
      labelStyle={{ fontSize: 14, fontWeight: '600' }}
      className={className}
      {...props}
    >
      {title}
    </PaperButton>
  );
};

export const Button = memo(ButtonComponent);
