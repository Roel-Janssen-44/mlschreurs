import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.CollageSlice} CollageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollageSlice>} CollageProps
 * @param {CollageProps}
 */
const Collage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-y-20 md:w-1/2 md:pr-10">
            {slice.items.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <div className="w-full" key={"collageItem-" + index}>
                    <PrismicNextImage field={item.image} />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-y-20 md:mt-20 md:w-1/2 md:pl-10">
            {slice.items.map((item, index) => {
              if (index % 2 == 1) {
                return (
                  <div className="w-full" key={"collageItem-" + index}>
                    <PrismicNextImage field={item.image} />
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

export default Collage;
