const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not configured."
  );
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface RegisterUser {
  id: number;
  fullName: string;
  email: string;
  emailVerified: boolean;
  role: string;
  status: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: RegisterUser;
}

export async function registerUser(
  payload: RegisterRequest
): Promise<RegisterResponse> {
  const response = await fetch(
    `${API_URL}/api/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "Registration failed. Please try again."
    );
  }

  return result;
}


export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
  emailVerified: boolean;
  role: string;
  status: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    expiresIn: number;
    tokenType: string;
    user: AuthUser;
  };
}

export async function loginUser(
  payload: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch(
    `${API_URL}/api/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      /*
       * Required when authentication uses cookies.
       */
      credentials: "include",

      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "Invalid email or password."
    );
  }

  return result;
}