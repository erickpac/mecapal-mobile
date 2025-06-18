export interface ApiErrorResponse {
  message: string;
  error: string;
  status: number;
}

export interface ApiSuccessResponse<T> {
  data: T;
  message: string;
  status: number;
}
