import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Property Risk Research",
  description: "不動産仕入れ調査SaaS - 物件住所を入力するだけで用途地域・ハザード情報を一元管理",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
