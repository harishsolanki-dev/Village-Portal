// export type CategoryStatus = "ACTIVE" | "INACTIVE";

// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   description: string | null;
//   icon: string | null;
//   imageUrl: string | null;
//   status: CategoryStatus;
//   sortOrder: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface CategoryFormData {
//   name: string;
//   slug: string;
//   description: string;
//   icon: string;
//   imageUrl: string;
//   status: CategoryStatus;
//   sortOrder: number;
// }

export type CategoryStatus = "ACTIVE" | "INACTIVE";

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
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}