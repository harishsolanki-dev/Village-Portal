
import { env } from "../config/env";
import { ApiMessageResponse, ApiResponse } from "../features/admin/categories/components/types/api.types";
import { Category, CategoryFormData, PageResponse } from "../features/admin/categories/components/types/category.types";

const CATEGORY_URL = `${env.apiUrl}/api/categories`;

async function handleResponse<T>(
  response: Response
): Promise<T> {
  const body = await response.json();

  if (!response.ok) {
    throw new Error(
      body?.message || "Something went wrong"
    );
  }

  return body;
}

export async function getCategories(
  page = 0,
  size = 10
): Promise<ApiResponse<PageResponse<Category>>> {
  const response = await fetch(
    `${CATEGORY_URL}?page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return handleResponse(response);
}

export async function getCategoryById(
  id: string
): Promise<ApiResponse<Category>> {
  const response = await fetch(
    `${CATEGORY_URL}/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return handleResponse(response);
}

export async function createCategory(
  data: CategoryFormData
): Promise<ApiResponse<Category>> {
  const response = await fetch(CATEGORY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
}

export async function updateCategory(
  id: string,
  data: CategoryFormData
): Promise<ApiResponse<Category>> {
  const response = await fetch(
    `${CATEGORY_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return handleResponse(response);
}

export async function deleteCategory(
  id: string
): Promise<ApiMessageResponse> {
  const response = await fetch(
    `${CATEGORY_URL}/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return handleResponse(response);
}

export async function getDeletedCategories(
  page = 0,
  size = 10
): Promise<ApiResponse<PageResponse<Category>>> {
  const response = await fetch(
    `${CATEGORY_URL}/deleted?page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  return handleResponse(response);
}

export async function restoreCategory(
  id: string
): Promise<ApiMessageResponse> {
  const response = await fetch(
    `${CATEGORY_URL}/${id}/restore`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return handleResponse(response);
}