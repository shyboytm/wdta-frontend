import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full border-b mb-8 py-4 bg-white dark:bg-black">
          <nav className="container mx-auto max-w-3xl flex gap-8 items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <Link href="/blog" className="font-bold hover:underline">
              Blog
            </Link>
            <Link href="/about" className="font-bold hover:underline">
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
