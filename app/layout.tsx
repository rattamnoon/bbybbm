import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "BBYBBM",
  description: "P'Un Love Cchorfah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansThai.variable} antialiased`}>{children}</body>
    </html>
  );
}
