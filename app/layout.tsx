import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sai Gowrav P — Product Manager",
  description:
    "Product Manager with a data-first foundation. 1.7+ years turning analytical insights into prioritized product decisions at Wipro and DXC Technology.",
  keywords: ["Product Manager", "PM", "Bengaluru", "data analytics", "SaaS"],
  openGraph: {
    title: "Sai Gowrav P — Product Manager",
    description:
      "Product Manager with a data-first foundation — building at the intersection of data, engineering, and business.",
    url: "https://gauravp.tech",
    siteName: "Sai Gowrav P",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
