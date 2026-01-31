import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>
        <div className="relative min-h-screen flex flex-col bg-[#ffffff]">
          <Navbar />
          <main className="flex-1 ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
