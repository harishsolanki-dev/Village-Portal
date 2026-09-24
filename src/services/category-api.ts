import { apiClient } from "@/src/services/api-client";

import {
  ApiMessageResponse,
  ApiResponse,
} from "@/src/features/admin/categories/components/types/api.types";

import {
  Category,
  CategoryFormData,
  PageResponse,
} from "@/src/features/admin/categories/components/types/category.types";

const CATEGORY_URL = "/api/categories";

/**
 * Common API response handler.
 */
async function handleResponse<T>(
  response: Response
): Promise<T> {

  /*
   * Some DELETE/PATCH APIs can return
   * an empty response.
   */
  const contentType =
    response.headers.get("content-type");

  let body: any = null;

  if (
    contentType?.includes(
      "application/json"
    )
  ) {
    body = await response.json();
  }

  /*
   * Unauthorized
   */
  if (response.status === 401) {
    throw new Error(
      "Your session has expired. Please login again."
    );
  }

  /*
   * Forbidden
   */
  if (response.status === 403) {
    throw new Error(
      "You do not have permission to perform this action."
    );
  }

  /*
   * Other errors
   */
  if (!response.ok) {
    throw new Error(
      body?.message ||
        `Request failed with status ${response.status}.`
    );
  }

  return body as T;
}

/**
 * GET /api/categories
 *
 * Fetch active categories with pagination.
 */
export async function getCategories(
  page = 0,
  size = 10
): Promise<
  ApiResponse<PageResponse<Category>>
> {

  const response = await apiClient(
    `${CATEGORY_URL}?page=${page}&size=${size}`,
    {
      method: "GET",
    }
  );

  return handleResponse<
    ApiResponse<PageResponse<Category>>
  >(response);
}

/**
 * GET /api/categories/{id}
 *
 * Fetch category by UUID.
 */
export async function getCategoryById(
  id: string
): Promise<ApiResponse<Category>> {

  const response = await apiClient(
    `${CATEGORY_URL}/${id}`,
    {
      method: "GET",
    }
  );

  return handleResponse<
    ApiResponse<Category>
  >(response);
}

/**
 * POST /api/categories
 *
 * Create category.
 */
export async function createCategory(
  data: CategoryFormData
): Promise<ApiResponse<Category>> {

  const response = await apiClient(
    CATEGORY_URL,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  return handleResponse<
    ApiResponse<Category>
  >(response);
}

/**
 * PUT /api/categories/{id}
 *
 * Update category.
 */
export async function updateCategory(
  id: string,
  data: CategoryFormData
): Promise<ApiResponse<Category>> {

  const response = await apiClient(
    `${CATEGORY_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  return handleResponse<
    ApiResponse<Category>
  >(response);
}

/**
 * DELETE /api/categories/{id}
 *
 * Soft delete category.
 */
export async function deleteCategory(
  id: string
): Promise<ApiMessageResponse> {

  const response = await apiClient(
    `${CATEGORY_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  return handleResponse<
    ApiMessageResponse
  >(response);
}

/**
 * GET /api/categories/deleted
 *
 * Fetch deleted/inactive categories.
 */
export async function getDeletedCategories(
  page = 0,
  size = 10
): Promise<
  ApiResponse<PageResponse<Category>>
> {

  const response = await apiClient(
    `${CATEGORY_URL}/deleted?page=${page}&size=${size}`,
    {
      method: "GET",
    }
  );

  return handleResponse<
    ApiResponse<PageResponse<Category>>
  >(response);
}

/**
 * PATCH /api/categories/{id}/restore
 *
 * Restore deleted category.
 */
export async function restoreCategory(
  id: string
): Promise<ApiMessageResponse> {

  const response = await apiClient(
    `${CATEGORY_URL}/${id}/restore`,
    {
      method: "PATCH",
    }
  );

  return handleResponse<
    ApiMessageResponse
  >(response);
}