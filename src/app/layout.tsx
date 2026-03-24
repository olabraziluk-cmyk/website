import type { Metadata } from "next";
import { Playfair_Display_SC, Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const karla = Karla({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ola Brazil",
    default: "Ola Brazil — Brazilian Shop, Butcher & Cafe in Bournemouth",
  },
  description:
    "Authentic Brazilian meats, imported goods, and fresh cafe treats in Bournemouth. Visit Ola Brazil at 339 Wimborne Rd. 5-star rated on Google.",
  openGraph: {
    title: "Ola Brazil — Brazilian Shop, Butcher & Cafe in Bournemouth",
    description:
      "Authentic Brazilian meats, imported goods, and fresh cafe treats in Bournemouth. Visit Ola Brazil at 339 Wimborne Rd. 5-star rated on Google.",
    url: "https://olabrazil.co.uk",
    siteName: "Ola Brazil",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${karla.variable}`}>
      <body className="bg-bg text-text min-h-screen flex flex-col antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
