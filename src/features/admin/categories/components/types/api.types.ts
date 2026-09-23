export interface ApiResponse<T> {
  success: boolean;
  status: string | null;
  message: string;
  data: T;
}

export interface ApiMessageResponse {
  success: boolean;
  status: string | null;
  message: string;
}