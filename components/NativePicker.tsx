import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
} from "react-native";
import { TextInput, IconButton } from "react-native-paper";

interface Option {
  label: string;
  value: string;
}

interface NativePickerProps {
  pickerLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const NativePicker: React.FC<NativePickerProps> = ({
  pickerLabel,
  value,
  onValueChange,
  options,
  error,
  placeholder = "Select an option",
  disabled = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelect = (option: Option) => {
    onValueChange(option.value);
    setVisible(false);
    setSearchQuery("");
  };

  const openModal = () => {
    if (!disabled) {
      setVisible(true);
    }
  };

  const closeModal = () => {
    setVisible(false);
    setSearchQuery("");
  };

  return (
    <View className="mb-4">
      {/* Custom dropdown input using TextInput for consistent styling */}
      <TouchableOpacity
        onPress={openModal}
        disabled={disabled}
        activeOpacity={0.7}
        className="absolute opacity-0"
        style={{ height: 0 }}
      />
      <TextInput
        label={pickerLabel}
        value={selectedOption?.label || ""}
        editable={false}
        mode="outlined"
        onPress={openModal}
        right={
          <TextInput.Icon
            icon="chevron-down"
            size={20}
            onPress={openModal}
            disabled={disabled}
          />
        }
        error={!!error}
        outlineStyle={{
          borderWidth: 1,
        }}
        contentStyle={{
          fontSize: 16,
          lineHeight: 22,
          fontFamily: "Plus Jakarta Sans Regular",
        }}
        style={{
          backgroundColor: "white",
        }}
        placeholder={placeholder}
        disabled={disabled}
      />

      {/* Custom Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Header */}
                <View className="border-b border-gray-200 bg-white px-4 py-3">
                  <View className="flex-row items-center justify-end">
                    <IconButton
                      icon="close"
                      size={24}
                      iconColor="#6B7280"
                      onPress={closeModal}
                      style={{ margin: 0 }}
                    />
                  </View>
                </View>

                {/* Options List */}
                <FlatList
                  data={filteredOptions}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="flex-row items-center justify-between border-b border-gray-100 px-4 py-4"
                      onPress={() => handleSelect(item)}
                    >
                      <Text
                        className={`font-plus-jakarta text-lg ${
                          item.value === value
                            ? "font-plus-jakarta-bold"
                            : "text-gray-900"
                        }`}
                      >
                        {item.label}
                      </Text>
                      {item.value === value && (
                        <IconButton
                          icon="check"
                          size={20}
                          iconColor="#4F46E5"
                          style={{ margin: 0 }}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  ListEmptyComponent={
                    <View className="flex-1 items-center justify-center py-10">
                      <Text className="font-sans text-base text-gray-400">
                        No options found
                      </Text>
                    </View>
                  }
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {error && (
        <View className="mt-1 flex-row justify-end">
          <Text className="font-plus-jakarta-regular text-right text-sm text-red-600">
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
  },
  modalContent: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: SCREEN_HEIGHT * 0.7,
    overflow: "hidden",
  },
  modalHeader: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  optionText: {
    fontSize: 16,
    color: "#111827",
    flex: 1,
  },
  selectedOptionText: {
    color: "#4F46E5",
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#9CA3AF",
  },
});
