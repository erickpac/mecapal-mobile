/**
 * API contract types for account deletion.
 * Source of truth: mekapal-api/src/modules/account
 */

export const DeletionReason = {
  NO_LONGER_USE: 'NO_LONGER_USE',
  CREATED_ANOTHER_ACCOUNT: 'CREATED_ANOTHER_ACCOUNT',
  PRIVACY_CONCERNS: 'PRIVACY_CONCERNS',
  APP_ISSUES: 'APP_ISSUES',
  BAD_EXPERIENCE: 'BAD_EXPERIENCE',
  MISSING_FEATURES: 'MISSING_FEATURES',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY',
  OTHER: 'OTHER',
} as const;

export type DeletionReason =
  (typeof DeletionReason)[keyof typeof DeletionReason];

/** Blockers returned by the backend when deletion is not allowed. */
export type DeletionBlocker =
  | 'ACTIVE_ORDERS'
  | 'PENDING_SETTLEMENTS'
  | 'OPEN_INCIDENTS'
  | 'ACTIVE_DELIVERY_REQUESTS';

// ---------- Requests ----------

export interface RequestAccountDeletionDto {
  password: string;
  reason?: DeletionReason;
  otherReason?: string;
}

// ---------- Responses ----------

export interface AccountDeletionResponse {
  /** ISO-8601 date string */
  scheduledFor: string;
  message: string;
}

export interface CancelDeletionResponse {
  message: string;
}

// ---------- Error response bodies ----------

/** 401 Unauthorized — wrong password */
export interface InvalidPasswordErrorResponse {
  statusCode: 401;
  message: 'Invalid password' | string;
  error?: string;
}

/** 409 Conflict — DELETION_BLOCKED */
export interface DeletionBlockedErrorResponse {
  statusCode: 409;
  error: 'DELETION_BLOCKED';
  message: string;
  blockers: DeletionBlocker[];
}

/** 409 Conflict — DELETION_ALREADY_SCHEDULED */
export interface DeletionAlreadyScheduledErrorResponse {
  statusCode: 409;
  error: 'DELETION_ALREADY_SCHEDULED';
  message: string;
  /** ISO-8601 date string */
  scheduledFor: string;
}

/** 404 Not Found — DELETION_NOT_SCHEDULED */
export interface DeletionNotScheduledErrorResponse {
  statusCode: 404;
  error: 'DELETION_NOT_SCHEDULED';
  message: string;
}

/** 429 Too Many Requests — RATE_LIMITED */
export interface RateLimitedErrorResponse {
  statusCode: 429;
  error: 'RATE_LIMITED';
  message: string;
}

/** 403 Forbidden — ACCOUNT_PENDING_DELETION (global, emitted for any mutating request while pending). */
export interface AccountPendingDeletionErrorResponse {
  statusCode: 403;
  error: 'ACCOUNT_PENDING_DELETION';
  message: string;
  /** ISO-8601 date string */
  scheduledFor: string;
}

export type AccountDeletionErrorResponse =
  | InvalidPasswordErrorResponse
  | DeletionBlockedErrorResponse
  | DeletionAlreadyScheduledErrorResponse
  | DeletionNotScheduledErrorResponse
  | RateLimitedErrorResponse
  | AccountPendingDeletionErrorResponse;
