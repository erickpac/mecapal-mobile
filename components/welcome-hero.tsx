import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name?: string | null;
};

const WelcomeHero = (props: Props) => {
  const { t } = useTranslation();
  const { name } = props;
  return (
    <View className="h-40 rounded-b-2xl bg-[#642E1499] p-4 px-8">
      {/* <Text>{t("transport.home.guestGreeting", { name })}</Text> */}
      <Text className="font-plus-jakarta-bold text-2xl font-bold text-white">
        Bienvenido, {name}
      </Text>
      <Text className="mt-2 text-lg font-normal text-white">
        ¡Movemos tus chivas por ti!
      </Text>
    </View>
  );
};

export default WelcomeHero;

const styles = StyleSheet.create({});
