const ACCESS_TOKEN_KEY = "vlg_access_token";
const USER_KEY = "vlg_user";

export interface StoredUser {
  id: number;
  fullName: string;
  email: string;
  emailVerified: boolean;
  role: string;
  status: string;
}

/**
 * Store authenticated user session.
 */
export function setAuthSession(
  accessToken: string,
  user: StoredUser
): void {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(
    ACCESS_TOKEN_KEY,
    accessToken
  );

  sessionStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
}

/**
 * Get JWT access token.
 */
export function getAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return sessionStorage.getItem(
    ACCESS_TOKEN_KEY
  );
}

/**
 * Get logged-in user.
 */
export function getStoredUser(): StoredUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const user = sessionStorage.getItem(
    USER_KEY
  );

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as StoredUser;
  } catch {
    return null;
  }
}

/**
 * Clear authentication session.
 */
export function clearAuthSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.removeItem(
    ACCESS_TOKEN_KEY
  );

  sessionStorage.removeItem(
    USER_KEY
  );
}