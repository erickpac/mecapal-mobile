import { useTranslation } from "react-i18next";
import { TRANSPORTER_TABS, USER_TABS, GUEST_TABS } from "@/consts/navigation";

// Hook to get tab configurations with translations
export const useTabConfigurations = () => {
  const { t } = useTranslation();

  return {
    TRANSPORTER_TABS: TRANSPORTER_TABS.map((tab) => ({
      ...tab,
      title: t(tab.titleKey),
    })),
    USER_TABS: USER_TABS.map((tab) => ({
      ...tab,
      title: t(tab.titleKey),
    })),
    GUEST_TABS: GUEST_TABS.map((tab) => ({
      ...tab,
      title: t(tab.titleKey),
    })),
  };
};
