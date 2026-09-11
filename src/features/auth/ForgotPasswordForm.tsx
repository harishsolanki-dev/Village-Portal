"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Email address is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 700);
  }

  return (
    <div>

      {/* Mobile logo */}
      <div className="mb-10 lg:hidden">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3F3F2F] text-sm font-bold text-white">
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
      <div className="mb-8">

        <Link
          href="/login"
          className="
            mb-6 inline-flex
            text-sm font-medium
            text-[#4D7C5A]
            hover:text-[#3F3F2F]
          "
        >
          ← Back to sign in
        </Link>

        <p className="mb-3 text-sm font-medium text-[#7A796C]">
          Account recovery
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#292A20]">
          Forgot your password?
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#77766B]">
          Enter your registered email address and we'll send
          instructions to reset your password.
        </p>

      </div>

      {success ? (
        <div
          className="
            rounded-2xl
            border border-[#B9D4BF]
            bg-[#EEF7F0]
            p-5
            animate-auth-slide-up
          "
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4D7C5A] text-white">
            ✓
          </div>

          <h3 className="font-semibold text-[#2F5E3E]">
            Check your email
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#55715D]">
            If an account exists for this email address,
            password reset instructions will be sent shortly.
          </p>

          <Link
            href="/login"
            className="
              mt-5 inline-block
              text-sm font-semibold
              text-[#4D7C5A]
              hover:text-[#3F3F2F]
            "
          >
            Return to sign in →
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
        >

          <div>

            <label
              htmlFor="forgot-email"
              className="mb-2 block text-sm font-medium text-[#4E4D43]"
            >
              Email address
            </label>

            <input
              id="forgot-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="you@example.com"
              autoComplete="email"
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

          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-xl
              bg-[#3F3F2F]
              px-4 py-3.5
              text-sm font-semibold
              text-white
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-[#323226]
              hover:shadow-lg
              focus:outline-none
              focus:ring-4
              focus:ring-[#3F3F2F]/15
              disabled:opacity-70
            "
          >
            {loading ? "Sending instructions..." : "Send reset link"}
          </button>

        </form>
      )}

    </div>
  );
}