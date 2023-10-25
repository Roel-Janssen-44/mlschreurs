import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicText } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient, repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

import { HiChevronDown } from "react-icons/hi";

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigatie");
  return (
    <header className="h-20 flex justify-center items-center fixed z-20 top-0 bg-white w-screen shadow-md">
      <div className="container flex flex-wrap items-center sm:items-baseline justify-between leading-none">
        <PrismicNextLink
          href="/"
          className="text-3xl p-4 pl-0 font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        {/* Mobile menu button */}
        <button className="flex sm:hidden gap-1.5 flex-col justify-center items-center min-w-[44px] min-h-[44px]">
          <div className="bg-black rounded-full w-9 h-1"></div>
          <div className="bg-black rounded-full w-9 h-1"></div>
          <div className="bg-black rounded-full w-9 h-1"></div>
        </button>
        {/* Menu items */}
        <nav className="hidden sm:block">
          <ul className="flex flex-wrap gap-2 md:gap-10">
            {navigation.data?.slices.map((slice) => (
              <li
                key={prismic.asText(slice.primary.label)}
                className="group py-3 font-semibold tracking-tight text-slate-800 relative"
              >
                <PrismicNextLink
                  field={slice.primary.link}
                  className="px-4 py-3 hover:underline underline-offset-4"
                >
                  <PrismicText field={slice.primary.label} />
                </PrismicNextLink>

                {slice.items && slice.items.length > 1 && (
                  <>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 duration-300 scale-y-100 group-hover:-scale-y-100">
                      <HiChevronDown />
                    </div>
                    <ul className="absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 bg-white rounded hidden group-hover:block">
                      {slice.items?.map((item) => (
                        <li
                          key={prismic.asText(item.label)}
                          className="font-semibold tracking-tight text-slate-800 w-full"
                        >
                          {console.log(item)}
                          <PrismicNextLink
                            href={`${slice.primary.link.url}/${item.link.uid}`}
                            className="px-3 py-4 w-full block hover:underline underline-offset-4"
                          >
                            <PrismicText field={item.label} />
                          </PrismicNextLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="py-20 bg-gray-200">
      <div className="container flex flex-row flex-wrap justify-between">
        <div className="w-full text-center mb-8 sm:text-left sm:w-1/2 md:w-1/4">
          <PrismicRichText field={footer.data.title_column_1} />
          <ul className="">
            {footer.data.column_1.map((item, index) => (
              <li className="py-1" key={`col_1_item_${index}`}>
                <PrismicRichText field={item.item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center mb-8 sm:text-left sm:w-1/2 md:w-1/4">
          <PrismicRichText field={footer.data.title_column_2} />
          <ul className="">
            {footer.data.column_2.map((item, index) => (
              <li className="py-1" key={`col_1_item_${index}`}>
                <PrismicRichText field={item.item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center mb-8 sm:text-left sm:w-1/2 md:w-1/4">
          <PrismicRichText field={footer.data.title_column_3} />
          <ul className="">
            {footer.data.column_3.map((item, index) => (
              <li className="py-1" key={`col_1_item_${index}`}>
                <PrismicRichText field={item.item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center mb-8 sm:text-left sm:w-1/2 md:w-1/4">
          <PrismicRichText field={footer.data.title_column_4} />
          <ul className="">
            {footer.data.column_4.map((item, index) => (
              <li className="py-1" key={`col_1_item_${index}`}>
                <PrismicRichText field={item.item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
