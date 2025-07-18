import React, { useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

export interface InputProps
  extends Omit<TextInputProps, "secureTextEntry" | "error"> {
  label: string;
  error?: string;
  success?: boolean;
  type?: "text" | "email" | "password" | "number" | "phone";
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  type = "text",
  helperText,
  value,
  onChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

  const getKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";
      case "number":
        return "numeric";
      case "phone":
        return "phone-pad";
      default:
        return "default";
    }
  };

  const getRightIcon = () => {
    if (type === "password") {
      return (
        <TextInput.Icon
          icon={showPassword ? "eye-off" : "eye"}
          onPress={() => setShowPassword(!showPassword)}
        />
      );
    }
    return props.right;
  };

  const defaultOutline = "#dedede";
  const errorOutline = "#f25b36";
  const successOutline = "#06b21a";

  const getOutlineColor = () => {
    if (!value) return defaultOutline;
    if (touched && error) return errorOutline;
    if (touched && !error) return successOutline;
    return defaultOutline;
  };

  const getActiveOutlineColor = () => {
    if (!value) return defaultOutline;
    if (touched && error) return errorOutline;
    if (touched && !error) return successOutline;
    return defaultOutline;
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setTouched(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
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
        outlineStyle={{ borderWidth: 1 }}
        keyboardType={getKeyboardType()}
        autoCapitalize={type === "email" ? "none" : "sentences"}
        autoCorrect={type === "email" ? false : true}
        secureTextEntry={type === "password" && !showPassword}
        right={getRightIcon()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={!!error && touched}
        contentStyle={{
          height: 54,
          paddingVertical: 0,
          fontSize: 16,
          lineHeight: 22,
          fontFamily: "Plus Jakarta Sans Regular",
        }}
        style={{ backgroundColor: "white" }}
        {...props}
      />

      {((!!error && touched) || helperText) && (
        <View className="mt-1 flex-row justify-end">
          <Text
            className={`font-plus-jakarta-regular text-right text-sm ${error && touched ? "text-red-600" : "text-gray-500"}`}
          >
            {error && touched ? error : helperText}
          </Text>
        </View>
      )}
    </View>
  );
};
