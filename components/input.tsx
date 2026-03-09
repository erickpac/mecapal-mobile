import React, { useState, useCallback, memo } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { COLORS } from '@/consts/colors';

export interface InputProps
  extends Omit<TextInputProps, 'secureTextEntry' | 'error'> {
  label: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'phone';
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
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

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
    return props.right;
  }, [type, showPassword, props.right]);

  const getOutlineColor = () => {
    if (!value) return defaultOutline;
    if (touched && error) return errorOutline;
    if (touched && !error) return successOutline;
    return defaultOutline;
  };

  const getActiveOutlineColor = () => {
    if (!value) return COLORS.black;
    if (touched && error) return errorOutline;
    if (touched && !error) return successOutline;
    return defaultOutline;
  };

  const handleFocus: TextInputProps['onFocus'] = (e) => {
    setTouched(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur: TextInputProps['onBlur'] = (e) => {
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <View className="mb-4">
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
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
        <View className="mt-1 flex-row justify-end">
          <Text className="font-plus-jakarta-regular text-right text-sm text-red-600">
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export const Input = memo(InputComponent);
