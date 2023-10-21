import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

/**
 * @typedef {import("@prismicio/client").Content.CollectiesSlice} CollectiesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectiesSlice>} CollectiesProps
 * @param {CollectiesProps}
 */
const Collecties = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-gray-100"
    >
      <div className="relative py-40 container flex flex-col gap-6 sm:gap-10">
        <div
          className={clsx(
            "text-center",
            slice.primary.text_alignment !== "Midden" && "sm:text-left",
            slice.primary.text_alignment === "Midden" && "sm:text-center"
          )}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.paragraph} />
        </div>
        {slice.items.length > 0 && (
          <ul className="flex flex-row flex-wrap gap-8 justify-center sm:justify-between">
            {slice.items.map((item) => (
              <li
                key={item.category_name}
                className="group w-96 sm:w-[272px] md:w-[335px] lg:w-[277px] bg-white rounded hover:shadow-lg duration-300"
              >
                <PrismicNextLink field={item.category_link}>
                  <div className="w-full aspect-1 overflow-hidden">
                    <PrismicNextImage
                      field={item.category_image}
                      className="pointer-events-none select-none object-cover block aspect-1 group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="text-center mt-4 pb-4">
                    <PrismicRichText field={item.category_name} />
                  </div>
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Collecties;
