
// import type { Metadata } from "next";

// import "./globals.css";

// import { LanguageProvider } from "@/src/components/i18n/language-provider";
// import { ThemeProvider } from "@/src/components/theme/theme-switcher";
// export const metadata: Metadata = {
//   title: "Village Portal",
//   description:
//     "A digital community platform for village news, events, services and local information.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <LanguageProvider defaultLanguage="en">
//             {children}
//           </LanguageProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";

import "./globals.css";

import { LanguageProvider } from "@/src/components/i18n/language-provider";
import { ThemeProvider } from "@/src/components/providers/app-providers";
import { ThemeProvider } from "@/src/components/theme/theme-switcher";


export const metadata: Metadata = {
  title: "Village Portal",
  description:
    "A digital community platform for village news, events, services and local information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider defaultLanguage="en">
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}