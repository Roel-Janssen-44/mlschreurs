import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  const client = createClient();

  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigatie");

  const footer = await client.getSingle("footer");

  return (
    <html lang="nl" className={inter.variable}>
      <CookieBanner />
      <body className="overflow-x-hidden antialiased ">
        <Navbar navigation={navigation} settings={settings} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer data={footer} />
      </body>
    </html>
  );
}
