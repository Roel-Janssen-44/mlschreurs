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
        <div className="flex flex-col gap-20 md:gap-6 md:flex-row md:flex-wrap">
          <div className="flex flex-col gap-y-6 md:flex-1">
            {slice.items.map((item, index) => {
              if (index % 3 == 0) {
                return (
                  <div
                    className="w-full flex justify-center"
                    key={"collageItem-" + index}
                  >
                    <PrismicNextImage field={item.image} width={450} />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-y-6 md:flex-1">
            {slice.items.map((item, index) => {
              if (index % 3 == 1) {
                return (
                  <div
                    className="w-full flex justify-center"
                    key={"collageItem-" + index}
                  >
                    <PrismicNextImage field={item.image} width={450} />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-y-6 md:flex-1">
            {slice.items.map((item, index) => {
              if (index % 3 == 2) {
                return (
                  <div
                    className="w-full flex justify-center"
                    key={"collageItem-" + index}
                  >
                    <PrismicNextImage field={item.image} width={450} />
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
