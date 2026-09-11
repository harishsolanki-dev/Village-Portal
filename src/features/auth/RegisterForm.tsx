"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState<RegisterErrors>({});

  function validate() {
    const newErrors: RegisterErrors = {};

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      newErrors.name = "Full name is required.";
    } else if (cleanName.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!cleanEmail) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password =
        "Password must contain at least one number.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!terms) {
      newErrors.terms =
        "You must accept the terms to continue.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // API will be connected later.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setLoading(false);
  }

  return (
    <div>

      {/* Mobile logo */}
      <div className="mb-8 lg:hidden">

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              bg-[#3F3F2F]
              text-sm font-bold
              text-white
            "
          >
            VP
          </div>

          <div>
            <p className="font-semibold text-[#292A20]">
              Village Portal
            </p>

            <p className="text-xs text-[#8A897D]">
              Jam Raval
            </p>
          </div>

        </div>

      </div>

      {/* Header */}
      <div className="mb-7">

        <p className="mb-3 text-sm font-medium text-[#7A796C]">
          Join our community
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#292A20]">
          Create your account
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#77766B]">
          Create an account to stay connected with your village.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4"
      >

        {/* Name */}
        <Field
          label="Full name"
          id="name"
          value={name}
          onChange={setName}
          placeholder="Enter your full name"
          error={errors.name}
          autoComplete="name"
        />

        {/* Email */}
        <Field
          label="Email address"
          id="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
          error={errors.email}
          autoComplete="email"
          type="email"
        />

        {/* Password */}
        <div>

          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-medium text-[#4E4D43]"
          >
            Password
          </label>

          <div className="relative">

            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              autoComplete="new-password"
              className={`
                w-full rounded-xl border
                bg-white
                px-4 py-3.5 pr-16
                text-sm text-[#292A20]
                outline-none
                transition-all
                placeholder:text-[#A3A197]
                ${
                  errors.password
                    ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
                    : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
                }
              `}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                text-xs font-semibold
                text-[#77766B]
                hover:text-[#3F3F2F]
              "
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {errors.password && (
            <p className="mt-2 text-xs font-medium text-[#B42318]">
              {errors.password}
            </p>
          )}

          {/* Password requirements */}
          <div className="mt-2 text-[11px] text-[#929187]">
            Minimum 8 characters, including uppercase, lowercase and number.
          </div>

        </div>

        {/* Confirm password */}
        <div>

          <label
            htmlFor="confirm-password"
            className="mb-2 block text-sm font-medium text-[#4E4D43]"
          >
            Confirm password
          </label>

          <div className="relative">

            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              className={`
                w-full rounded-xl border
                bg-white
                px-4 py-3.5 pr-16
                text-sm text-[#292A20]
                outline-none
                transition-all
                placeholder:text-[#A3A197]
                ${
                  errors.confirmPassword
                    ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
                    : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
                }
              `}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                text-xs font-semibold
                text-[#77766B]
                hover:text-[#3F3F2F]
              "
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>

          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-xs font-medium text-[#B42318]">
              {errors.confirmPassword}
            </p>
          )}

        </div>

        {/* Terms */}
        <div>

          <label className="flex items-start gap-3">

            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="
                mt-0.5 h-4 w-4
                rounded
                border-[#D7D3C7]
                accent-[#4D7C5A]
              "
            />

            <span className="text-xs leading-5 text-[#77766B]">
              I agree to the Village Portal terms and privacy policy.
            </span>

          </label>

          {errors.terms && (
            <p className="mt-2 text-xs font-medium text-[#B42318]">
              {errors.terms}
            </p>
          )}

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            mt-2
            w-full rounded-xl
            bg-[#3F3F2F]
            px-4 py-3.5
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-[#323226]
            hover:shadow-lg
            hover:shadow-[#3F3F2F]/10
            focus:outline-none
            focus:ring-4
            focus:ring-[#3F3F2F]/15
            disabled:opacity-70
          "
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

      </form>

      {/* Login */}
      <p className="mt-7 text-center text-sm text-[#77766B]">

        Already have an account?{" "}

        <Link
          href="/login"
          className="
            font-semibold
            text-[#4D7C5A]
            hover:text-[#3F3F2F]
            hover:underline
          "
        >
          Sign in
        </Link>

      </p>

    </div>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  autoComplete?: string;
  type?: string;
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  type = "text",
}: FieldProps) {
  return (
    <div>

      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-[#4E4D43]"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`
          w-full rounded-xl border
          bg-white
          px-4 py-3.5
          text-sm text-[#292A20]
          outline-none
          transition-all
          placeholder:text-[#A3A197]
          ${
            error
              ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
              : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-xs font-medium text-[#B42318]">
          {error}
        </p>
      )}

    </div>
  );
}