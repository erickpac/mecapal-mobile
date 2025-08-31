import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NavigationHeader } from '@/components/navigation-header';
import { useTranslation } from 'react-i18next';


const ContactScreen = () => {
    const { t } = useTranslation();
    return (
        <>
            <NavigationHeader title="" showBackButton={true} borderBottom={false} />
            <ScrollView className="flex-1 bg-white">
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.contact.title")}</Text>
                    <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-4">{t("profile.help.contact.subtitle")}</Text>
                </View>
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.contact.email")}</Text>
                    <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">hola@mekapal.com</Text>
                </View>
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.contact.phone")}</Text>
                    <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">1234-5678</Text>
                </View>
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.contact.website")}</Text>
                    <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">mekapal.app</Text>
                </View>
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.contact.socialMedia")}</Text>
                </View>
            </ScrollView>
        </>
    )
}

export default ContactScreen