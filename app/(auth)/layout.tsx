import { AuthShell } from "@/src/features/auth/auth-shell";
import type { ReactNode } from "react";


export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthShell>{children}</AuthShell>;
}