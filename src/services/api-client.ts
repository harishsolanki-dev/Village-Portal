import {
  getAccessToken,
  clearAuthSession,
} from "./auth-storage";

import { env } from "../config/env";

if (!env.apiUrl) {
  throw new Error(
    "API URL is not configured."
  );
}

/**
 * Central API client.
 *
 * Automatically:
 * - Adds Accept header
 * - Adds Content-Type when body exists
 * - Adds JWT Authorization header
 * - Handles 401 session expiration
 */
export async function apiClient(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {

  const token = getAccessToken();

  const headers = new Headers(
    options.headers
  );

  headers.set(
    "Accept",
    "application/json"
  );

  /*
   * Only set JSON Content-Type when
   * request contains a body.
   */
  if (options.body) {
    headers.set(
      "Content-Type",
      "application/json"
    );
  }

  /*
   * Add JWT token.
   */
  if (token) {
    headers.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(
    `${env.apiUrl}${endpoint}`,
    {
      ...options,
      headers,
      cache: "no-store",
    }
  );

  /*
   * Unauthorized:
   * JWT missing / expired / invalid.
   */
  if (response.status === 401) {
    clearAuthSession();
  }

  return response;
}