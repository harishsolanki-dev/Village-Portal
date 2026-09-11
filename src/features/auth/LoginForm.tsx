
// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";

// export function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     // API will be added later.
//   }

//   return (
//     <div>
//       {/* Mobile Logo */}
//       <div className="mb-10 lg:hidden">
//         <div className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
//             VP
//           </div>

//           <div>
//             <p className="font-semibold text-slate-950">
//               Village Portal
//             </p>

//             <p className="text-xs text-slate-500">
//               Jam Raval
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="mb-8">
//         <p className="mb-3 text-sm font-medium text-slate-500">
//           Welcome back
//         </p>

//         <h2 className="text-3xl font-bold tracking-tight text-slate-950">
//           Sign in to your account
//         </h2>

//         <p className="mt-3 text-sm leading-6 text-slate-500">
//           Access your Village Portal account and stay connected
//           with your community.
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-5">

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="mb-2 block text-sm font-medium text-slate-700"
//           >
//             Email address
//           </label>

//           <input
//             id="email"
//             name="email"
//             type="email"
//             autoComplete="email"
//             placeholder="you@example.com"
//             required
//             className="
//               w-full rounded-xl border border-slate-200
//               bg-white px-4 py-3.5 text-sm text-slate-950
//               placeholder:text-slate-400
//               outline-none transition
//               focus:border-slate-950
//               focus:ring-4 focus:ring-slate-950/5
//             "
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <div className="mb-2 flex items-center justify-between">
//             <label
//               htmlFor="password"
//               className="text-sm font-medium text-slate-700"
//             >
//               Password
//             </label>

//             <Link
//               href="/forgot-password"
//               className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <div className="relative">
//             <input
//               id="password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               autoComplete="current-password"
//               placeholder="Enter your password"
//               required
//               className="
//                 w-full rounded-xl border border-slate-200
//                 bg-white px-4 py-3.5 pr-16 text-sm text-slate-950
//                 placeholder:text-slate-400
//                 outline-none transition
//                 focus:border-slate-950
//                 focus:ring-4 focus:ring-slate-950/5
//               "
//             />

//             <button
//               type="button"
//               onClick={() => setShowPassword((value) => !value)}
//               className="
//                 absolute right-4 top-1/2
//                 -translate-y-1/2
//                 text-xs font-semibold text-slate-500
//                 hover:text-slate-950
//               "
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//         </div>

//         {/* Remember */}
//         <div className="flex items-center gap-3">
//           <input
//             id="remember"
//             name="remember"
//             type="checkbox"
//             className="h-4 w-4 rounded border-slate-300"
//           />

//           <label
//             htmlFor="remember"
//             className="text-sm text-slate-600"
//           >
//             Remember me
//           </label>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="
//             w-full rounded-xl bg-slate-950
//             px-4 py-3.5 text-sm font-semibold text-white
//             transition
//             hover:bg-slate-800
//             focus:outline-none
//             focus:ring-4 focus:ring-slate-950/10
//           "
//         >
//           Sign in
//         </button>
//       </form>

//       {/* Register */}
//       <p className="mt-8 text-center text-sm text-slate-500">
//         Don't have an account?{" "}
//         <Link
//           href="/register"
//           className="font-semibold text-slate-950 hover:underline"
//         >
//           Create account
//         </Link>
//       </p>

//       {/* Security Notice */}
//       <p className="mt-8 text-center text-xs leading-5 text-slate-400">
//         Your account information is securely protected.
//       </p>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

interface LoginErrors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function validate() {
    const newErrors: LoginErrors = {};

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
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

      {/* Mobile Logo */}
      <div className="mb-10 lg:hidden">

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
      <div className="mb-8">

        <p className="mb-3 text-sm font-medium text-[#7A796C]">
          Welcome back
        </p>

        <h2
          className="
            text-3xl font-bold
            tracking-tight
            text-[#292A20]
          "
        >
          Sign in to your account
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#77766B]">
          Access your Village Portal account and stay connected
          with your community.
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
      >

        {/* Email */}
        <div>

          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#4E4D43]"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

              if (errors.email) {
                setErrors((prev) => ({
                  ...prev,
                  email: undefined,
                }));
              }
            }}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`
              w-full rounded-xl
              border
              bg-white
              px-4 py-3.5
              text-sm text-[#292A20]
              placeholder:text-[#A3A197]
              outline-none
              transition-all duration-200
              ${
                errors.email
                  ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
                  : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
              }
            `}
          />

          {errors.email && (
            <p
              id="email-error"
              className="mt-2 text-xs font-medium text-[#B42318]"
            >
              {errors.email}
            </p>
          )}

        </div>

        {/* Password */}
        <div>

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="password"
              className="text-sm font-medium text-[#4E4D43]"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="
                text-sm font-medium
                text-[#4D7C5A]
                transition-colors
                hover:text-[#3F3F2F]
              "
            >
              Forgot password?
            </Link>

          </div>

          <div className="relative">

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                if (errors.password) {
                  setErrors((prev) => ({
                    ...prev,
                    password: undefined,
                  }));
                }
              }}
              placeholder="Enter your password"
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password ? "password-error" : undefined
              }
              className={`
                w-full rounded-xl
                border
                bg-white
                px-4 py-3.5 pr-16
                text-sm text-[#292A20]
                placeholder:text-[#A3A197]
                outline-none
                transition-all duration-200
                ${
                  errors.password
                    ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
                    : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
                }
              `}
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                text-xs font-semibold
                text-[#77766B]
                transition-colors
                hover:text-[#3F3F2F]
              "
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {errors.password && (
            <p
              id="password-error"
              className="mt-2 text-xs font-medium text-[#B42318]"
            >
              {errors.password}
            </p>
          )}

        </div>

        {/* Remember */}
        <label className="flex cursor-pointer items-center gap-3">

          <input
            id="remember"
            name="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="
              h-4 w-4
              rounded
              border-[#D7D3C7]
              accent-[#4D7C5A]
            "
          />

          <span className="text-sm text-[#68675C]">
            Remember me
          </span>

        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            group
            relative
            w-full
            overflow-hidden
            rounded-xl
            bg-[#3F3F2F]
            px-4 py-3.5
            text-sm font-semibold
            text-white
            shadow-sm
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-[#323226]
            hover:shadow-lg
            hover:shadow-[#3F3F2F]/10
            focus:outline-none
            focus:ring-4
            focus:ring-[#3F3F2F]/15
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >

          {/* Button shine animation */}
          <span
            className="
              absolute inset-y-0 -left-20
              w-12
              rotate-12
              bg-white/10
              blur-md
              transition-transform
              duration-700
              group-hover:translate-x-[30rem]
            "
          />

          <span className="relative flex items-center justify-center gap-2">

            {loading ? (
              <>
                <span
                  className="
                    h-4 w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />

                Signing in...
              </>
            ) : (
              "Sign in"
            )}

          </span>

        </button>

      </form>

      {/* Register */}
      <p className="mt-8 text-center text-sm text-[#77766B]">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="
            font-semibold
            text-[#4D7C5A]
            hover:text-[#3F3F2F]
            hover:underline
          "
        >
          Create account
        </Link>

      </p>

      {/* Security */}
      <div
        className="
          mt-8
          rounded-xl
          border border-[#E5E2D8]
          bg-[#F4F2EA]
          px-4 py-3
          text-center
        "
      >
        <p className="text-xs leading-5 text-[#7A796D]">
          Your account information is securely protected.
        </p>
      </div>

    </div>
  );
}