import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { NavigationHeader } from "@/components/navigation-header";
// eslint-disable-next-line import/no-named-as-default
import MaterialIcon from "@/components/material-icon";
import { COLORS } from "@/consts/colors";
import { useTranslation } from "react-i18next";

export default function UserProfileScreen() {
  const { user, logout } = useStore();
  const { t } = useTranslation();

  return (
    <>
      <NavigationHeader title="" showBackButton={false} />
      <View className="flex-1 bg-white">
        <View className="flex-1">
          <View className="h-52 bg-orange-600">
            <Image
              source={require("../../../assets/images/profile-background.png")}
              className="absolute inset-0 h-full w-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          {/* Profile Info */}
          <View className="-mt-20 mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <View className="items-center">
              <View className="relative">
                <View className="-mt-20 h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gray-100">
                  <MaterialSymbol
                    name="person"
                    size={48}
                    color="text-gray-500"
                    variant="rounded"
                  />
                </View>
                <TouchableOpacity
                  className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md"
                  onPress={() => {
                    // Add your edit avatar logic here
                  //@TODO
                    console.log("Edit avatar pressed");
                  }}
                >
                  <MaterialSymbol
                    name="edit"
                    size={20}
                    color="text-gray"
                    variant="rounded"
                  />
                </TouchableOpacity>
              </View>
              <View className="mt-4 items-center">
                <Text className="text-xl font-semibold text-gray-800">
                  {user?.name || "Usuario"}
                </Text>
                <Text className="text-gray-600">{user?.email}</Text>
              </View>
            </View>
          </View>
          <View className="-mt-24 rounded-2xl bg-white p-4 shadow-sm">
            <View className="items-center">
              <View className="items-center">
                <Text className="text-xl font-semibold text-gray-800">
                  {t("profile.title")}
                </Text>
                <Text className="text-gray-600">{user?.name || "Jom Doe"}</Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View className="space-y-3 px-4">
            <TouchableOpacity className="rounded-lg border-b border-gray-300 bg-white p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialIcon
                    name="account-circle-outline"
                    size={28}
                    color={COLORS.primary}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                  {t("profile.personalInfo.title")}
                  </Text>
                  <Text className="text-gray-600">{t("profile.personalInfo.subtitle")}</Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="rounded-lg border-b border-gray-300 bg-white p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialIcon
                    name="credit-card-outline"
                    size={28}
                    color={COLORS.primary}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t("profile.paymentMethods.title")}
                  </Text>
                  <Text className="text-gray-600">{t("profile.paymentMethods.subtitle")}</Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="rounded-lg border-b border-gray-300 bg-white p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="corporate_fare"
                    size={28}
                    color="text-primary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t("profile.address.title")}
                  </Text>
                  <Text className="text-gray-600">{t("profile.address.subtitle")}</Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="rounded-lg border-b border-gray-300 bg-white p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="lock"
                    size={28}
                    color="text-primary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t("profile.security.title")}
                  </Text>
                  <Text className="text-gray-600">{t("profile.security.subtitle")}</Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg border-b border-gray-300 bg-white p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="help"
                    size={28}
                    color="text-primary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t("profile.help.title")}
                  </Text>
                  <Text className="text-gray-600">{t("profile.help.subtitle")}</Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="absolute bottom-0 left-0 right-0 bg-white p-4">
            {/* Logout Button */}
            <TouchableOpacity
              onPress={logout}
              className="mt-6 flex flex-row items-center gap-2 rounded-lg p-4 align-middle"
            >
              <MaterialIcon name="logout" size={24} color="#FF6B00" />
              <Text className="text-left text-base font-semibold text-primary-500">
                {t("profile.account.logout")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
