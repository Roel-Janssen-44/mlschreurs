import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import Head from "next/head";
import Script from "next/script";

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
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      {/* <CookieBanner /> */}
      <body className="overflow-x-hidden antialiased ">
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-0309S7KH8C`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0309S7KH8C', { 'send_page_view': true });
                    `,
          }}
        />
        <Navbar navigation={navigation} settings={settings} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer data={footer} />
      </body>
    </html>
  );
}
