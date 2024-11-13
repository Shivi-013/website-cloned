import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Page from "./page";
import 'tailwindcss/tailwind.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rudra",
  description: "Welcome to the rudra website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
