import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alireza Front-End Developer Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
  abstract:
    "Front-End Developer  Proficient in modern frameworks like Next.js, React, and TailwindCSS  Specialized in crafting responsive, innovative, and visually appealing web applications  Showcasing technical expertise and creativity through portfolio projects  Focused on enhancing user experience with cutting-edge tools and technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio-folder.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
