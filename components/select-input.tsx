import React, { useState, memo } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { Button } from '@/components/button';
import { useTranslation } from 'react-i18next';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectInputProps {
  label: string;
  value: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  modalTitle?: string;
}

const inputContentStyle = {
  fontSize: 16,
  lineHeight: 22,
  fontFamily: 'Plus Jakarta Sans Regular',
};
const inputStyle = { backgroundColor: 'white' };
const inputOutlineStyle = { borderWidth: 1 };

const SelectInputComponent: React.FC<SelectInputProps> = ({
  label,
  value,
  options,
  onValueChange,
  placeholder,
  error,
  modalTitle,
}) => {
  const { t } = useTranslation();
  const [showPicker, setShowPicker] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [touched, setTouched] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || '';

  const getOutlineColor = () => {
    if (touched && error) return COLORS.error;
    if (touched && !error && value) return COLORS.success;
    return COLORS.lightGray[600];
  };

  const handleOpen = () => {
    setTempValue(value || options[0]?.value || '');
    setShowPicker(true);
  };

  const handleConfirm = () => {
    onValueChange(tempValue);
    setTouched(true);
    setShowPicker(false);
  };

  const handleClose = () => {
    setTouched(true);
    setShowPicker(false);
  };

  return (
    <View className="mb-4">
      <TouchableOpacity onPress={handleOpen} activeOpacity={0.7}>
        <TextInput
          label={label}
          value={selectedLabel}
          mode="outlined"
          editable={false}
          onPressIn={handleOpen}
          placeholder={placeholder}
          right={
            <TextInput.Icon
              icon="chevron-down"
              size={20}
              color={COLORS.lightGray[700]}
              onPress={handleOpen}
            />
          }
          outlineColor={getOutlineColor()}
          activeOutlineColor={COLORS.black}
          contentStyle={inputContentStyle}
          style={inputStyle}
          outlineStyle={inputOutlineStyle}
        />
      </TouchableOpacity>

      {!!error && touched && (
        <Text className="mt-1 text-right font-plus-jakarta text-xs text-red-600">
          {error}
        </Text>
      )}

      <Modal
        visible={showPicker}
        transparent
        animationType="fade"
        onRequestClose={handleClose}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View className="flex-1 bg-black/30">
            <TouchableWithoutFeedback>
              <View className="mt-auto rounded-t-3xl bg-white">
                <View className="flex-row items-center justify-between border-b border-gray-100 px-6 pb-2 pt-4">
                  <Text className="font-plus-jakarta-semibold text-lg text-gray-900">
                    {modalTitle ?? label}
                  </Text>
                  <TouchableOpacity onPress={handleClose} className="p-1">
                    <MaterialCommunityIcons
                      name="close"
                      size={24}
                      color={COLORS.lightGray[700]}
                    />
                  </TouchableOpacity>
                </View>

                <View className="px-6 py-4">
                  <Picker
                    selectedValue={tempValue}
                    onValueChange={setTempValue}
                    style={{ height: 200 }}
                    itemStyle={{ fontSize: 16 }}
                  >
                    {options.map((option) => (
                      <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                </View>

                <View className="border-t border-gray-100 px-6 pb-8 pt-4">
                  <Button
                    title={t('common.save')}
                    onPress={handleConfirm}
                    variant="contained"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export const SelectInput = memo(SelectInputComponent);
