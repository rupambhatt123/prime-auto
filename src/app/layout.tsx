import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

const inter = Inter({ subsets: ["latin"] });

const { common, categories } = websiteData;
const footerData =
  categories.Automotive.sections.Footer.variants.PrimeFooter1;

export const metadata: Metadata = {
  title: `${common.siteNamePrimary} ${common.siteNameAccent} - ${common.tagline}`,
  description: footerData.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}