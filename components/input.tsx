import React, { useState, useCallback, useEffect, memo } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { COLORS } from '@/consts/colors';

export interface InputProps extends Omit<
  TextInputProps,
  'secureTextEntry' | 'error'
> {
  label: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'phone';
  dirty?: boolean;
}

const inputContentStyle = {
  fontSize: 16,
  lineHeight: 22,
  fontFamily: 'Plus Jakarta Sans Regular',
};
const inputStyle = {
  backgroundColor: 'white',
};
const inputOutlineStyle = {
  borderWidth: 1,
};
const defaultOutline = COLORS.lightGray[600];
const errorOutline = COLORS.error;
const successOutline = COLORS.success;

const InputComponent: React.FC<InputProps> = ({
  label,
  error,
  type = 'text',
  value,
  onChangeText,
  onBlur,
  onFocus,
  right,
  dirty,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    if (dirty === false) setBlurred(false);
  }, [dirty]);

  const touched = blurred;

  const getKeyboardType = useCallback(() => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  }, [type]);

  const getRightIcon = useCallback(() => {
    if (type === 'password') {
      return (
        <TextInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          size={22}
          onPress={() => setShowPassword((prev) => !prev)}
        />
      );
    }
    return right;
  }, [type, showPassword, right]);

  const getOutlineColor = () => {
    if (touched && error) return errorOutline;
    if (touched && !error && value) return successOutline;
    return defaultOutline;
  };

  const getActiveOutlineColor = () => {
    if (error) return errorOutline;
    if (!error && value) return successOutline;
    return COLORS.black;
  };

  const isNumericType = type === 'phone' || type === 'number';

  const handleChangeText = useCallback(
    (text: string) => {
      if (isNumericType) {
        onChangeText?.(text.replace(/[^0-9]/g, ''));
      } else {
        onChangeText?.(text);
      }
    },
    [isNumericType, onChangeText],
  );

  const handleFocus: TextInputProps['onFocus'] = (e) => {
    if (onFocus) onFocus(e);
  };

  const handleBlur: TextInputProps['onBlur'] = (e) => {
    setBlurred(true);
    if (onBlur) onBlur(e);
  };

  return (
    <View className="mb-4">
      <TextInput
        label={label}
        value={value}
        onChangeText={handleChangeText}
        mode="outlined"
        outlineColor={getOutlineColor()}
        activeOutlineColor={getActiveOutlineColor()}
        outlineStyle={inputOutlineStyle}
        keyboardType={getKeyboardType()}
        autoCapitalize={type === 'email' ? 'none' : 'sentences'}
        autoCorrect={type === 'email' ? false : true}
        secureTextEntry={type === 'password' && !showPassword}
        right={getRightIcon()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={!!error && touched}
        contentStyle={inputContentStyle}
        style={inputStyle}
        {...props}
      />

      {!!error && touched && (
        <Text className="font-plus-jakarta-regular mt-1 text-right text-xs text-red-600">
          {error}
        </Text>
      )}
    </View>
  );
};

export const Input = memo(InputComponent);
