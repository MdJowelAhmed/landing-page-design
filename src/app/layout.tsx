import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Duty Hour App | Workforce Management Solution",
    template: "%s | Duty Hour App",
  },
  description:
    "Duty Hour App brings integrity and automation to your HR processes. Our dual-validation system ensures every minute is accounted for, eliminating manual data entry and risk.",
  keywords: ["workforce management", "attendance tracking", "HR automation", "employee management", "geo-fencing", "payroll"],
  authors: [{ name: "Duty Hour App" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Duty Hour App",
    title: "Duty Hour App | Workforce Management Solution",
    description:
      "Take command of your institution's attendance with the most accurate, fraud-proof attendance data available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duty Hour App | Workforce Management Solution",
    description:
      "Take command of your institution's attendance with the most accurate, fraud-proof attendance data available.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen flex flex-col bg-[#F8F6F3]">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
