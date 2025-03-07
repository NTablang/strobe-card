import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StrobeLogo from "../public/strobe-small.png";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="absolute top-4 left-4">
          <Image
            src={StrobeLogo}
            alt="Strobe Logo"
            className="h-16 w-16"
            unoptimized
          />
        </div>
        {children}
      </body>
    </html>
  );
}
