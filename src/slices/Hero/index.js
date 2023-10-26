import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

import { Button } from "@/components/Button";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.image;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen"
    >
      <div className="relative h-screen">
        {prismic.isFilled.image(backgroundImage) && (
          <PrismicNextImage
            field={backgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none select-none object-cover"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-black"></div>
        <div className="absolute w-full left-0 lg:left-24 top-[53%] -translateY-1/2">
          <div className="container">
            <div className="text-white max-w-xl">
              <PrismicRichText field={slice.primary.title} />
              <PrismicRichText field={slice.primary.paragraph} />
              <Button
                type="secondary"
                link={slice.primary.button_link}
                label={slice.primary.button_label}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
