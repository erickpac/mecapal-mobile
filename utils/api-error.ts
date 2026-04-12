import { AxiosError } from 'axios';

export enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION = 'VALIDATION',
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN = 'UNKNOWN',
}

const ERROR_CODE_TO_I18N: Record<ErrorCode, string> = {
  [ErrorCode.UNAUTHORIZED]: 'errors.unauthorized',
  [ErrorCode.FORBIDDEN]: 'errors.forbidden',
  [ErrorCode.NOT_FOUND]: 'errors.notFound',
  [ErrorCode.VALIDATION]: 'errors.validationError',
  [ErrorCode.SERVER_ERROR]: 'errors.serverError',
  [ErrorCode.NETWORK_ERROR]: 'errors.networkError',
  [ErrorCode.UNKNOWN]: 'errors.generic',
};

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly statusCode?: number;
  readonly serverMessage?: string;
  readonly serverErrorCode?: string;

  constructor(
    code: ErrorCode,
    statusCode?: number,
    serverMessage?: string,
    serverErrorCode?: string,
  ) {
    super(serverMessage ?? code);
    this.code = code;
    this.statusCode = statusCode;
    this.serverMessage = serverMessage;
    this.serverErrorCode = serverErrorCode;
  }

  get i18nKey(): string {
    return ERROR_CODE_TO_I18N[this.code];
  }
}

export function parseApiError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const data = error.response?.data;
    const rawMessage = data?.message;
    const message = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
    const serverErrorCode =
      typeof data?.error === 'string' ? data.error : undefined;

    if (!error.response && error.request) {
      return new AppError(
        ErrorCode.NETWORK_ERROR,
        undefined,
        message,
        serverErrorCode,
      );
    }

    switch (status) {
      case 400:
        return new AppError(
          ErrorCode.VALIDATION,
          status,
          message,
          serverErrorCode,
        );
      case 401:
        return new AppError(
          ErrorCode.UNAUTHORIZED,
          status,
          message,
          serverErrorCode,
        );
      case 403:
        return new AppError(
          ErrorCode.FORBIDDEN,
          status,
          message,
          serverErrorCode,
        );
      case 404:
        return new AppError(
          ErrorCode.NOT_FOUND,
          status,
          message,
          serverErrorCode,
        );
      case 422:
        return new AppError(
          ErrorCode.VALIDATION,
          status,
          message,
          serverErrorCode,
        );
      case 429:
        return new AppError(
          ErrorCode.VALIDATION,
          status,
          message,
          serverErrorCode ?? 'RATE_LIMITED',
        );
      case 500:
        return new AppError(
          ErrorCode.SERVER_ERROR,
          status,
          message,
          serverErrorCode,
        );
      default:
        return new AppError(
          ErrorCode.UNKNOWN,
          status,
          message,
          serverErrorCode,
        );
    }
  }

  if (typeof error === 'string') {
    return new AppError(ErrorCode.UNKNOWN, undefined, error);
  }

  const msg = error instanceof Error ? error.message : 'Unknown error occurred';
  return new AppError(ErrorCode.UNKNOWN, undefined, msg);
}
