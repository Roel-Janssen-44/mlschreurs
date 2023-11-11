import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { PrismicRichText } from "@/components/PrismicRichText";
import { HiChevronRight } from "react-icons/hi";

export function Breadcrumb({ page }) {
  return (
    <div className="mt-20">
      <div className="w-full h-64 relative overflow-hidden">
        <PrismicNextImage
          field={page.data?.meta_image}
          className="pointer-events-none select-none object-cover object-center h-[300px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="text-white container mx-auto text-center mt-16">
            <PrismicRichText field={page.data?.title} />
            <div className="flex flex-row justify-center items-center text-lg gap-2">
              <a
                href="/"
                className="font-bold hover:underline underline-offset-2"
              >
                Home
              </a>
              {page.data?.parent?.id && <HiChevronRight />}
              {page.data?.parent?.id && (
                <>
                  <PrismicNextLink
                    href={`/${page.data.parent.slug}`}
                    className="cursor-pointer font-bold hover:underline underline-offset-2"
                  >
                    {page.data?.parent.uid}
                  </PrismicNextLink>
                </>
              )}
              <HiChevronRight />
              <span>{page.uid}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="lg:max-w-2xl container text-center sm:text-left mx-auto my-20">
        {page.data?.meta_description}
      </p> */}
    </div>
  );
}
