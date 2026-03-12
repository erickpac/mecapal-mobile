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

  constructor(code: ErrorCode, statusCode?: number, serverMessage?: string) {
    super(serverMessage ?? code);
    this.code = code;
    this.statusCode = statusCode;
    this.serverMessage = serverMessage;
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
    const message =
      error.response?.data?.message ?? error.response?.data?.error;

    if (!error.response && error.request) {
      return new AppError(ErrorCode.NETWORK_ERROR, undefined, message);
    }

    switch (status) {
      case 400:
        return new AppError(ErrorCode.VALIDATION, status, message);
      case 401:
        return new AppError(ErrorCode.UNAUTHORIZED, status, message);
      case 403:
        return new AppError(ErrorCode.FORBIDDEN, status, message);
      case 404:
        return new AppError(ErrorCode.NOT_FOUND, status, message);
      case 422:
        return new AppError(ErrorCode.VALIDATION, status, message);
      case 500:
        return new AppError(ErrorCode.SERVER_ERROR, status, message);
      default:
        return new AppError(ErrorCode.UNKNOWN, status, message);
    }
  }

  if (typeof error === 'string') {
    return new AppError(ErrorCode.UNKNOWN, undefined, error);
  }

  const msg = error instanceof Error ? error.message : 'Unknown error occurred';
  return new AppError(ErrorCode.UNKNOWN, undefined, msg);
}
