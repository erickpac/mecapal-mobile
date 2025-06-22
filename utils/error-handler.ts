import { useTranslation } from "react-i18next";
import { ApiErrorResponse } from "@/services/api";

export class ErrorHandler {
  private static getErrorMessage(error: any): string {
    // If it's already an app error message, return it as is
    if (typeof error === "string") {
      return error;
    }

    // If it's an API error, map it
    const apiError = this.parseApiError(error);

    console.error(apiError);

    // Map specific error codes
    switch (apiError.status) {
      case 401:
        return "auth.errors.invalidCredentials";
      case 403:
        return "auth.errors.unauthorized";
      case 404:
        return "general.errors.notFound";
      case 422:
        return "general.errors.validationError";
      case 500:
        return "general.errors.serverError";
      default:
        return "general.errors.generic";
    }
  }

  private static parseApiError(error: any): ApiErrorResponse {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message,
        error: error.response.data?.error,
      };
    }

    if (error.request) {
      return {
        status: 0,
        message: "Network error",
        error: "Network error",
      };
    }

    return {
      message: error.message || "Unknown error",
      error: "Unknown error",
    };
  }

  static handle(error: any): string {
    return this.getErrorMessage(error);
  }
}

// Hook to use in components
export const useErrorHandler = () => {
  const { t } = useTranslation();

  const handleError = (error: any): string => {
    const errorKey = ErrorHandler.handle(error);
    return t(errorKey);
  };

  return { handleError };
};
