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

/**
 * Stable error codes emitted by the backend (in the `error` field of the
 * response body) mapped to client-side i18n keys. The backend owns the code;
 * the translation lives here. Mirrors `src/common/exceptions/error-code.ts`
 * in mekapal-api. Generic codes reuse the per-status `errors.*` keys; domain
 * codes get dedicated `errors.server.*` keys. Falls back to the generic
 * per-status key (ERROR_CODE_TO_I18N) when a code is not listed.
 */
const SERVER_ERROR_CODE_TO_I18N: Record<string, string> = {
  // Generic / cross-cutting — reuse the existing per-status keys
  VALIDATION_ERROR: 'errors.validationError',
  BAD_REQUEST: 'errors.validationError',
  INTERNAL_ERROR: 'errors.serverError',
  UNAUTHORIZED: 'errors.unauthorized',
  FORBIDDEN: 'errors.forbidden',
  NOT_FOUND: 'errors.notFound',
  CONFLICT: 'errors.generic',
  RATE_LIMITED: 'errors.server.rateLimited',

  // Auth / Cognito
  INVALID_CREDENTIALS: 'errors.server.invalidCredentials',
  USER_NOT_CONFIRMED: 'errors.server.userNotConfirmed',
  USER_ALREADY_EXISTS: 'errors.server.userAlreadyExists',
  INVALID_CODE: 'errors.server.invalidCode',
  EXPIRED_CODE: 'errors.server.expiredCode',
  INVALID_PASSWORD: 'errors.server.invalidPassword',
  USER_NOT_FOUND: 'errors.server.userNotFound',
  INVALID_TOKEN: 'errors.server.invalidToken',
  UNAUTHORIZED_ROLE: 'errors.server.unauthorizedRole',

  // Account deletion
  DELETION_BLOCKED: 'errors.server.deletionBlocked',
  DELETION_ALREADY_SCHEDULED: 'errors.server.deletionAlreadyScheduled',
  DELETION_NOT_SCHEDULED: 'errors.server.deletionNotScheduled',

  // User
  EMAIL_ALREADY_TAKEN: 'errors.server.emailAlreadyTaken',

  // Address
  ADDRESS_NOT_FOUND: 'errors.server.addressNotFound',
  ADDRESS_IN_USE: 'errors.server.addressInUse',
  ADDRESS_LIMIT_EXCEEDED: 'errors.server.addressLimitExceeded',

  // Vehicle
  VEHICLE_NOT_FOUND: 'errors.server.vehicleNotFound',
  VEHICLE_IN_USE: 'errors.server.vehicleInUse',
  VEHICLE_LIMIT_EXCEEDED: 'errors.server.vehicleLimitExceeded',

  // Delivery
  DELIVERY_REQUEST_NOT_FOUND: 'errors.server.deliveryRequestNotFound',
  DELIVERY_OFFER_NOT_FOUND: 'errors.server.deliveryOfferNotFound',
  OFFER_WINDOW_EXPIRED: 'errors.server.offerWindowExpired',
  INVALID_REQUEST_STATUS: 'errors.server.invalidRequestStatus',
  INVALID_OFFER_STATUS: 'errors.server.invalidOfferStatus',
  DUPLICATE_OFFER: 'errors.server.duplicateOffer',

  // Order
  ORDER_NOT_FOUND: 'errors.server.orderNotFound',
  INVALID_ORDER_STATUS: 'errors.server.invalidOrderStatus',
  INVALID_STATUS_TRANSITION: 'errors.server.invalidStatusTransition',

  // Payment
  PAYMENT_METHOD_NOT_FOUND: 'errors.server.paymentMethodNotFound',
  TRANSACTION_NOT_FOUND: 'errors.server.transactionNotFound',
  PAYMENT_FAILED: 'errors.server.paymentFailed',
  INVALID_PAYMENT_METHOD: 'errors.server.invalidPaymentMethod',

  // Bank account
  BANK_ACCOUNT_NOT_FOUND: 'errors.server.bankAccountNotFound',
  BANK_ACCOUNT_NOT_VERIFIED: 'errors.server.bankAccountNotVerified',
  DUPLICATE_BANK_ACCOUNT: 'errors.server.duplicateBankAccount',
  BANK_ACCOUNT_HAS_SETTLEMENTS: 'errors.server.bankAccountHasSettlements',

  // Settlement
  SETTLEMENT_NOT_FOUND: 'errors.server.settlementNotFound',
  SETTLEMENT_ALREADY_PAID: 'errors.server.settlementAlreadyPaid',
  SETTLEMENT_ALREADY_EXISTS: 'errors.server.settlementAlreadyExists',

  // Review
  REVIEW_NOT_FOUND: 'errors.server.reviewNotFound',
  REVIEW_ALREADY_EXISTS: 'errors.server.reviewAlreadyExists',
  INVALID_REVIEW_TARGET: 'errors.server.invalidReviewTarget',
  ORDER_NOT_COMPLETED: 'errors.server.orderNotCompleted',

  // Incident
  INCIDENT_NOT_FOUND: 'errors.server.incidentNotFound',
  INVALID_INCIDENT_STATUS: 'errors.server.invalidIncidentStatus',
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
    if (this.serverErrorCode) {
      const mapped = SERVER_ERROR_CODE_TO_I18N[this.serverErrorCode];
      if (mapped) return mapped;
    }
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
    // The standardized error contract always carries the stable code in `error`.
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
