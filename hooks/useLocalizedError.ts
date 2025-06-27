import { useTranslation } from "react-i18next";
import { ErrorHandler } from "@/utils/error-handler";

export const useLocalizedError = () => {
  const { t } = useTranslation();

  const handleError = (error: any): string => {
    const errorKey = ErrorHandler.handle(error);
    return t(errorKey);
  };

  return { handleError };
};
