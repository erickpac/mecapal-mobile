import { ApiErrorResponse } from "@/services/api";

export class ErrorHandler {
  private static getErrorMessage(error: any): string {
    // If it's already an app error message, return it as is
    if (typeof error === "string") {
      return error;
    }

    // If it's an API error, map it
    const apiError = this.parseApiError(error);

    // Map specific error codes
    switch (apiError.status) {
      case 401:
        return "errors.unauthorized";
      case 403:
        return "errors.forbidden";
      case 404:
        return "errors.notFound";
      case 422:
        return "errors.validationError";
      case 500:
        return "errors.serverError";
      default:
        return "errors.generic";
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
