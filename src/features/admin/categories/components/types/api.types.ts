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

export type CategoryStatus =
  | "ACTIVE"
  | "INACTIVE";

export interface Category {
  id: string;

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  imageUrl: string | null;

  status: CategoryStatus;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}

export interface CategoryFormData {
  name: string;

  description?: string;

  icon?: string;

  imageUrl?: string;

  sortOrder?: number;

  status?: CategoryStatus;
}

export interface PageResponse<T> {
  content: T[];

  pageable: {
    pageNumber: number;
    pageSize: number;
  };

  totalElements: number;

  totalPages: number;

  first: boolean;

  last: boolean;

  number: number;

  size: number;

  numberOfElements: number;

  empty: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  imageUrl?: string | null;
  status: "ACTIVE" | "INACTIVE";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryFormData {
  name: string;
  description?: string;
  icon?: string;
}