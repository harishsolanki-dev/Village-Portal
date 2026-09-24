
// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";

// interface LoginErrors {
//   email?: string;
//   password?: string;
// }

// export function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<LoginErrors>({});

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);

//   function validate() {
//     const newErrors: LoginErrors = {};

//     const cleanEmail = email.trim();

//     if (!cleanEmail) {
//       newErrors.email = "Email address is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
//       newErrors.email = "Enter a valid email address.";
//     }

//     if (!password) {
//       newErrors.password = "Password is required.";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   }

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (!validate()) return;

//     setLoading(true);

//     // API will be connected later.
//     await new Promise((resolve) => setTimeout(resolve, 700));

//     setLoading(false);
//   }

//   return (
//     <div>

//       {/* Mobile Logo */}
//       <div className="mb-10 lg:hidden">

//         <div className="flex items-center gap-3">

//           <div
//             className="
//               flex h-11 w-11
//               items-center justify-center
//               rounded-2xl
//               bg-[#3F3F2F]
//               text-sm font-bold
//               text-white
//             "
//           >
//             VP
//           </div>

//           <div>
//             <p className="font-semibold text-[#292A20]">
//               Village Portal
//             </p>

//             <p className="text-xs text-[#8A897D]">
//               Jam Raval
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* Header */}
//       <div className="mb-8">

//         <p className="mb-3 text-sm font-medium text-[#7A796C]">
//           Welcome back
//         </p>

//         <h2
//           className="
//             text-3xl font-bold
//             tracking-tight
//             text-[#292A20]
//           "
//         >
//           Sign in to your account
//         </h2>

//         <p className="mt-3 text-sm leading-6 text-[#77766B]">
//           Access your Village Portal account and stay connected
//           with your community.
//         </p>

//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         noValidate
//         className="space-y-5"
//       >

//         {/* Email */}
//         <div>

//           <label
//             htmlFor="email"
//             className="mb-2 block text-sm font-medium text-[#4E4D43]"
//           >
//             Email address
//           </label>

//           <input
//             id="email"
//             name="email"
//             type="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);

//               if (errors.email) {
//                 setErrors((prev) => ({
//                   ...prev,
//                   email: undefined,
//                 }));
//               }
//             }}
//             placeholder="you@example.com"
//             aria-invalid={!!errors.email}
//             aria-describedby={errors.email ? "email-error" : undefined}
//             className={`
//               w-full rounded-xl
//               border
//               bg-white
//               px-4 py-3.5
//               text-sm text-[#292A20]
//               placeholder:text-[#A3A197]
//               outline-none
//               transition-all duration-200
//               ${
//                 errors.email
//                   ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
//                   : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
//               }
//             `}
//           />

//           {errors.email && (
//             <p
//               id="email-error"
//               className="mt-2 text-xs font-medium text-[#B42318]"
//             >
//               {errors.email}
//             </p>
//           )}

//         </div>

//         {/* Password */}
//         <div>

//           <div className="mb-2 flex items-center justify-between">

//             <label
//               htmlFor="password"
//               className="text-sm font-medium text-[#4E4D43]"
//             >
//               Password
//             </label>

//             <Link
//               href="/forgot-password"
//               className="
//                 text-sm font-medium
//                 text-[#4D7C5A]
//                 transition-colors
//                 hover:text-[#3F3F2F]
//               "
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
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);

//                 if (errors.password) {
//                   setErrors((prev) => ({
//                     ...prev,
//                     password: undefined,
//                   }));
//                 }
//               }}
//               placeholder="Enter your password"
//               aria-invalid={!!errors.password}
//               aria-describedby={
//                 errors.password ? "password-error" : undefined
//               }
//               className={`
//                 w-full rounded-xl
//                 border
//                 bg-white
//                 px-4 py-3.5 pr-16
//                 text-sm text-[#292A20]
//                 placeholder:text-[#A3A197]
//                 outline-none
//                 transition-all duration-200
//                 ${
//                   errors.password
//                     ? "border-[#B42318] focus:ring-4 focus:ring-[#B42318]/10"
//                     : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
//                 }
//               `}
//             />

//             <button
//               type="button"
//               onClick={() => setShowPassword((value) => !value)}
//               className="
//                 absolute right-4 top-1/2
//                 -translate-y-1/2
//                 text-xs font-semibold
//                 text-[#77766B]
//                 transition-colors
//                 hover:text-[#3F3F2F]
//               "
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>

//           </div>

//           {errors.password && (
//             <p
//               id="password-error"
//               className="mt-2 text-xs font-medium text-[#B42318]"
//             >
//               {errors.password}
//             </p>
//           )}

//         </div>

//         {/* Remember */}
//         <label className="flex cursor-pointer items-center gap-3">

//           <input
//             id="remember"
//             name="remember"
//             type="checkbox"
//             checked={remember}
//             onChange={(e) => setRemember(e.target.checked)}
//             className="
//               h-4 w-4
//               rounded
//               border-[#D7D3C7]
//               accent-[#4D7C5A]
//             "
//           />

//           <span className="text-sm text-[#68675C]">
//             Remember me
//           </span>

//         </label>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="
//             group
//             relative
//             w-full
//             overflow-hidden
//             rounded-xl
//             bg-[#3F3F2F]
//             px-4 py-3.5
//             text-sm font-semibold
//             text-white
//             shadow-sm
//             transition-all duration-200
//             hover:-translate-y-0.5
//             hover:bg-[#323226]
//             hover:shadow-lg
//             hover:shadow-[#3F3F2F]/10
//             focus:outline-none
//             focus:ring-4
//             focus:ring-[#3F3F2F]/15
//             disabled:cursor-not-allowed
//             disabled:opacity-70
//           "
//         >

//           {/* Button shine animation */}
//           <span
//             className="
//               absolute inset-y-0 -left-20
//               w-12
//               rotate-12
//               bg-white/10
//               blur-md
//               transition-transform
//               duration-700
//               group-hover:translate-x-[30rem]
//             "
//           />

//           <span className="relative flex items-center justify-center gap-2">

//             {loading ? (
//               <>
//                 <span
//                   className="
//                     h-4 w-4
//                     animate-spin
//                     rounded-full
//                     border-2
//                     border-white/30
//                     border-t-white
//                   "
//                 />

//                 Signing in...
//               </>
//             ) : (
//               "Sign in"
//             )}

//           </span>

//         </button>

//       </form>

//       {/* Register */}
//       <p className="mt-8 text-center text-sm text-[#77766B]">

//         Don't have an account?{" "}

//         <Link
//           href="/register"
//           className="
//             font-semibold
//             text-[#4D7C5A]
//             hover:text-[#3F3F2F]
//             hover:underline
//           "
//         >
//           Create account
//         </Link>

//       </p>

//       {/* Security */}
//       <div
//         className="
//           mt-8
//           rounded-xl
//           border border-[#E5E2D8]
//           bg-[#F4F2EA]
//           px-4 py-3
//           text-center
//         "
//       >
//         <p className="text-xs leading-5 text-[#7A796D]">
//           Your account information is securely protected.
//         </p>
//       </div>

//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/src/services/auth-api";
import { setAuthSession } from "@/src/services/auth-storage";

interface LoginErrors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<LoginErrors>({});

  function validate() {
    const nextErrors: LoginErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Please enter your password.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

//  async function handleSubmit(
//   event: FormEvent<HTMLFormElement>
// ) {
//   event.preventDefault();

//   setErrors({});

//   if (!validate()) {
//     return;
//   }

//   setLoading(true);

//   try {
//     const response = await loginUser({
//       email: email.trim(),
//       password,
//     });

//     if (!response.success) {
//       setErrors({
//         password:
//           response.message ||
//           "Login failed.",
//       });

//       return;
//     }

//     /*
//      * IMPORTANT:
//      *
//      * We do NOT store accessToken in:
//      * - localStorage
//      * - sessionStorage
//      * - document.cookie
//      *
//      * The backend should set the JWT
//      * as an HttpOnly cookie.
//      */

//     const role = response.data.user.role;

//     if (role === "SUPER_ADMIN") {
//       router.push("/dashboard");
//     } else if (role === "ADMIN") {
//       router.push("/dashboard");
//     } else {
//       router.push("/");
//     }

//   } catch (error) {
//     setErrors({
//       password:
//         error instanceof Error
//           ? error.message
//           : "Unable to sign in. Please try again.",
//     });
//   } finally {
//     setLoading(false);
//   }
// }

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setErrors({});

  if (!validate()) return;

  setLoading(true);

  // try {
  //   const response = await loginUser({
  //     email: email.trim(),
  //     password,
  //   });

  //   if (!response.success) {
  //     setErrors({
  //       password: response.message || "Login failed.",
  //     });
  //     return;
  //   }

  //   const userRole = response.data?.user?.role;

  //   // Route based on role returned from Spring Boot ("USER", "ADMIN", "SUPER_ADMIN")
  //   if (userRole === "SUPER_ADMIN" || userRole === "ADMIN") {
  //     router.push("/dashboard");
  //   } else {
  //     router.push("/");
  //   }

  //   // Force page refresh if router.push doesn't trigger layout updates
  //   router.refresh();

  // } catch (error) {
  //   setErrors({
  //     password:
  //       error instanceof Error
  //         ? error.message
  //         : "Unable to sign in. Please check your credentials and try again.",
  //   });
  // } finally {
  //   setLoading(false);
  // }

  try {
  const response = await loginUser({
    email: email.trim(),
    password,
  });

  if (!response.success) {
    setErrors({
      password:
        response.message || "Login failed.",
    });

    return;
  }

  const {
    accessToken,
    user,
  } = response.data;

  // Store authenticated session
  setAuthSession(
    accessToken,
    user
  );

  // Role based navigation
  if (
    user.role === "SUPER_ADMIN" ||
    user.role === "ADMIN"
  ) {
    router.push("/admin");
  } else {
    router.push("/");
  }

} catch (error) {
  setErrors({
    password:
      error instanceof Error
        ? error.message
        : "Unable to sign in. Please try again.",
  });
} finally {
  setLoading(false);
}
}
  return (
    <div>

      {/* Header */}
      <div className="mb-8">

        <div
          className="
            mb-5 flex h-11 w-11
            items-center justify-center
            rounded-2xl
            bg-[#F5EFE1]
            text-lg
          "
        >
          👋
        </div>

        <p className="mb-2 text-sm font-semibold text-[#4D7C5A]">
          Welcome back
        </p>

        <h1
          className="
            text-3xl font-black
            tracking-[-0.03em]
            text-[#292A20]
          "
        >
          Sign in to Village Portal
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#77766B]">
          Stay connected with news, events and your local community.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
      >

        {/* Email */}
        <div>

          <label
            htmlFor="email"
            className="
              mb-2 block
              text-sm font-semibold
              text-[#4E4D43]
            "
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              setErrors((current) => ({
                ...current,
                email: undefined,
              }));
            }}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={`
              w-full rounded-2xl
              border
              bg-[#FCFCFA]
              px-4 py-3.5
              text-sm text-[#292A20]
              outline-none
              transition-all duration-200
              placeholder:text-[#AAA99E]
              ${
                errors.email
                  ? "border-[#B42318] bg-[#FFF8F7] focus:ring-4 focus:ring-[#B42318]/10"
                  : "border-[#E5E2D8] hover:border-[#D2CEC0] focus:border-[#4D7C5A] focus:bg-white focus:ring-4 focus:ring-[#4D7C5A]/10"
              }
            `}
          />

          {errors.email && (
            <p className="mt-2 text-xs font-medium text-[#B42318]">
              {errors.email}
            </p>
          )}

        </div>

        {/* Password */}
        <div>

          <div className="mb-2 flex items-center justify-between">

            <label
              htmlFor="password"
              className="
                text-sm font-semibold
                text-[#4E4D43]
              "
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="
                text-xs font-semibold
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
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);

                setErrors((current) => ({
                  ...current,
                  password: undefined,
                }));
              }}
              placeholder="Enter your password"
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              className={`
                w-full rounded-2xl
                border
                bg-[#FCFCFA]
                px-4 py-3.5 pr-16
                text-sm text-[#292A20]
                outline-none
                transition-all duration-200
                placeholder:text-[#AAA99E]
                ${
                  errors.password
                    ? "border-[#B42318] bg-[#FFF8F7]"
                    : "border-[#E5E2D8] hover:border-[#D2CEC0] focus:border-[#4D7C5A] focus:bg-white focus:ring-4 focus:ring-[#4D7C5A]/10"
                }
              `}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((value) => !value)
              }
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                rounded-lg px-2 py-1
                text-xs font-semibold
                text-[#77766B]
                transition-colors
                hover:bg-[#F1EFE7]
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

        </div>

        {/* Remember */}
        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="checkbox"
            checked={remember}
            onChange={(event) =>
              setRemember(event.target.checked)
            }
            className="
              h-4 w-4
              rounded
              border-[#D7D3C7]
              accent-[#4D7C5A]
            "
          />

          <span className="text-sm text-[#77766B]">
            Remember me
          </span>

        </label>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            group relative
            w-full overflow-hidden
            rounded-2xl
            bg-[#3F3F2F]
            px-4 py-4
            text-sm font-bold
            text-white
            shadow-lg
            shadow-[#3F3F2F]/10
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-[#343429]
            hover:shadow-xl
            focus:outline-none
            focus:ring-4
            focus:ring-[#3F3F2F]/15
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >

          {/* Button light sweep */}
          <span
            className="
              absolute inset-y-0 -left-20
              w-16
              rotate-12
              bg-white/10
              blur-md
              transition-transform
              duration-700
              group-hover:translate-x-[500px]
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

                Signing you in...
              </>
            ) : (
              <>
                Sign in
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </>
            )}

          </span>

        </button>

      </form>

      {/* Divider */}
      <div className="my-7 flex items-center gap-4">

        <div className="h-px flex-1 bg-[#E8E5DC]" />

        <span className="text-xs text-[#AAA99E]">
          New here?
        </span>

        <div className="h-px flex-1 bg-[#E8E5DC]" />

      </div>

      {/* Register */}
      <Link
        href="/register"
        className="
          flex w-full
          items-center justify-center
          rounded-2xl
          border border-[#DCD8CB]
          bg-white
          px-4 py-3.5
          text-sm font-semibold
          text-[#3F3F2F]
          transition-all duration-200
          hover:-translate-y-0.5
          hover:border-[#4D7C5A]
          hover:bg-[#F8FAF5]
          hover:shadow-md
        "
      >
        Create a free account
      </Link>

      {/* Security */}
      <div className="mt-7 flex items-center justify-center gap-2">

        <span className="text-xs text-[#AAA99E]">
          🔒 Secure account
        </span>

        <span className="h-1 w-1 rounded-full bg-[#D3D0C5]" />

        <span className="text-xs text-[#AAA99E]">
          Free for everyone
        </span>

      </div>

    </div>
  );
}