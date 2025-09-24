import { View, Text, ScrollView } from 'react-native'
import { NavigationHeader } from '@/components/navigation-header';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyScreen = () => {
    const { t } = useTranslation();
    return (
        <>
            <NavigationHeader title="" showBackButton={true} borderBottom={false} />
            <ScrollView className="flex-1 bg-white">
                <View className="px-8 py-4">
                    <Text className="text-2xl font-bold text-gray-800">{t("profile.help.privacy.title")}</Text>
                </View>
            </ScrollView>
        </>
    )
}

export default PrivacyPolicyScreen