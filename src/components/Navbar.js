"use client";

import { useState } from "react";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { HiChevronDown } from "react-icons/hi";

export default function Navbar({ navigation, settings }) {
  const [showNavbar, setShowNavbar] = useState(false);

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <header className="h-20 flex justify-center items-center fixed z-20 top-0 bg-white w-screen shadow-md">
      <div className="container flex flex-wrap items-center sm:items-baseline justify-between leading-none h-20">
        <PrismicNextLink
          href="/"
          aria-hidden
          onClick={closeNavbar}
          className="z-20 text-3xl p-4 pl-0 font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        {/* Mobile menu button */}
        <button
          aria-label="navigatie button"
          onClick={() => setShowNavbar(!showNavbar)}
          className="flex relative z-20 sm:hidden gap-1.5 flex-col justify-center items-center min-w-[44px] min-h-[44px]"
        >
          <div
            className={`${
              showNavbar ? "absolute top-1/2 -translate-y-1/2 rotate-45" : ""
            } duration-300  bg-black rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar ? "hidden" : ""
            } duration-300  bg-black rounded-full w-9 h-1`}
          ></div>
          <div
            className={`${
              showNavbar ? "absolute top-1/2 -translate-y-1/2 -rotate-45" : ""
            }
            duration-300 bg-black rounded-full w-9 h-1`}
          ></div>
        </button>
        {/* Menu items */}
        <nav
          className={`absolute duration-300 top-0 left-0 w-screen h-screen flex justify-center bg-white ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } sm:block sm:relative sm:w-auto sm:h-auto sm:translate-y-0`}
        >
          <ul className="flex flex-col justify-center sm:flex-row items-center flex-wrap gap-2 md:gap-10">
            {navigation.data?.slices.map((slice) => (
              <li
                key={prismic.asText(slice.primary.label)}
                className="group py-3 font-semibold tracking-tight text-slate-800 relative"
              >
                <PrismicNextLink
                  field={slice.primary.link}
                  onClick={closeNavbar}
                  className="px-4 py-3 hover:underline underline-offset-4"
                >
                  <PrismicText field={slice.primary.label} />
                </PrismicNextLink>

                {slice.items && slice.items.length > 1 && (
                  <>
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 duration-300 scale-y-100 lg:group-hover:-scale-y-100">
                      <HiChevronDown />
                    </div>
                    <ul className="z-30 absolute min-w-[200px] shadow-md top-10 left-0 pt-6 pb-2 bg-white rounded hidden lg:group-hover:block">
                      {slice.items?.map((item) => (
                        <li
                          key={prismic.asText(item.label)}
                          className="font-semibold tracking-tight text-slate-800 w-full"
                        >
                          <PrismicNextLink
                            href={`${slice.primary.link.url}/${item.link.uid}`}
                            onClick={closeNavbar}
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
