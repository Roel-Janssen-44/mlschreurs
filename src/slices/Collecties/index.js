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
      className="my-20"
    >
      <div className="container">
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-0 md:flex-row">
          <div className="flex flex-col gap-y-10 sm:gap-y-16 md:gap-y-20 md:w-1/2 md:pr-10">
            {slice.items.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <div
                    className="w-full relative group overflow-hidden"
                    key={"collectieItem-" + index}
                  >
                    <PrismicNextLink field={item.category_link}>
                      <PrismicNextImage
                        field={item.category_image}
                        className="group-hover:scale-105 duration-300 cursor-pointer"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
                      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-white text-center mt-4 pb-4">
                        <PrismicRichText field={item.category_name} />
                      </div>
                    </PrismicNextLink>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-y-10 sm:gap-y-16 md:gap-y-20 md:mt-20 md:w-1/2 md:pl-10">
            {slice.items.map((item, index) => {
              if (index % 2 == 1) {
                return (
                  <div
                    className="w-full relative group overflow-hidden"
                    key={"collectieItem-" + index}
                  >
                    <PrismicNextLink field={item.category_link}>
                      <PrismicNextImage
                        field={item.category_image}
                        className="group-hover:scale-105 duration-300 cursor-pointer"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
                      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-white text-center mt-4 pb-4">
                        <PrismicRichText field={item.category_name} />
                      </div>
                    </PrismicNextLink>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collecties;
