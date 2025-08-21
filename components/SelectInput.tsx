import React from "react";
import { View } from "react-native";
import { HelperText, Menu, TextInput } from "react-native-paper";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onValueChange,
  options,
  error,
  placeholder = "Select an option",
  disabled = false,
}) => {
  const [visible, setVisible] = React.useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const openMenu = () => {
    if (disabled) {
      return;
    }
    setVisible(true);
  };
  const closeMenu = () => setVisible(false);

  return (
    <View className="mb-4">
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TextInput
            label={label}
            value={selectedOption?.label || ""}
            onPressIn={openMenu}
            error={!!error}
            placeholder={placeholder}
            disabled={disabled}
            right={<TextInput.Icon icon="chevron-down" />}
            mode="outlined"
            style={{ backgroundColor: "#FFF" }}
          />
        }
      >
        {options.map((option) => (
          <Menu.Item
            key={option.value}
            onPress={() => {
              onValueChange(option.value);
              closeMenu();
            }}
            title={option.label}
          />
        ))}
      </Menu>
      {error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};
