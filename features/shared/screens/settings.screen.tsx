import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SharedSettingsScreen() {
  const { user, logout } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Settings</Text>
        <Text className="text-gray-600 mt-1">
          Manage your preferences and account
        </Text>
      </View>

      <View className="p-4">
        {/* General Settings */}
        <View className="space-y-3 mb-6">
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="flex-row items-center">
              <Ionicons name="person" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Edit Profile
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#8E8E93"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="flex-row items-center">
              <Ionicons name="lock-closed" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Change Password
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#8E8E93"
                style={{ marginLeft: "auto" }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Role-specific Settings */}
        {user?.role === UserRole.USER && (
          <View className="space-y-3 mb-6">
            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="notifications" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  Notifications
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="help-circle" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  Help & Support
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        {user?.role === UserRole.TRANSPORTER && (
          <View className="space-y-3 mb-6">
            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="car" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  Vehicle Settings
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="cash" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  Earnings & Payments
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Logout */}
        <TouchableOpacity
          onPress={logout}
          className="bg-red-500 p-4 rounded-lg mt-6"
        >
          <View className="flex-row items-center justify-center">
            <Ionicons name="log-out" size={24} color="white" />
            <Text className="text-white text-center font-semibold text-lg ml-2">
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
