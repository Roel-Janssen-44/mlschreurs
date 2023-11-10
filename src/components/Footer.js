import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
export default function Footer({ data }) {
  let columnAmount = 3;
  if (data.data.column_4[0]?.item[0] !== undefined) {
    columnAmount = 4;
  }

  return (
    <footer className="py-20 pb-0 bg-gray-200">
      <div className="container flex flex-row flex-wrap justify-between md:max-w-xl lg:max-w-7xl">
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-normal md:text-left md:w-1/2 lg:justify-center ${
            columnAmount === 3 ? "lg:w-1/3" : "lg:w-1/4"
          }`}
        >
          <div className="">
            <PrismicRichText field={data.data.title_column_1} />
            <ul className="">
              {data.data.column_1.map((item, index) => (
                <li className="py-1" key={`col_1_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-end md:text-left md:w-1/2 lg:justify-center ${
            columnAmount === 3 ? "lg:w-1/3" : "lg:w-1/4"
          }`}
        >
          <div className="">
            <PrismicRichText field={data.data.title_column_2} />
            <ul className="">
              {data.data.column_2.map((item, index) => (
                <li className="py-1" key={`col_1_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`w-full text-center flex justify-center mb-8 md:justify-normal md:text-left md:w-1/2 lg:justify-center ${
            columnAmount === 3 ? "lg:w-1/3" : "lg:w-1/4"
          }`}
        >
          <div className="">
            <PrismicRichText field={data.data.title_column_3} />
            <ul className="">
              {data.data.column_3.map((item, index) => (
                <li className="py-1" key={`col_1_item_${index}`}>
                  <PrismicRichText field={item.item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {columnAmount === 4 && (
          <div
            className={`w-full text-center flex justify-center mb-8 md:justify-end md:text-left md:w-1/2 lg:justify-center ${
              columnAmount === 3 ? "lg:w-1/3" : "lg:w-1/4"
            }`}
          >
            <div className="">
              <PrismicRichText field={data.data.title_column_4} />
              <ul className="">
                {data.data.column_4.map((item, index) => (
                  <li className="py-1" key={`col_1_item_${index}`}>
                    <PrismicRichText field={item.item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="bg-black bg-opacity-5 py-4">
        <div className="container flex flex-col lg:flex-row gap-6 justify-center items-center lg:justify-around">
          <div>
            <span>
              © 2023 MLSchreurs | Gemaakt door{" "}
              <a href="" className="underline">
                Websidesign
              </a>
            </span>
          </div>
          <div className="flex flex-row">
            {data.data.links_group.map((item, index) => (
              <div key={`footer_item-${index}`}>
                {index !== 0 && <span className="mx-2">|</span>}
                <PrismicNextLink className="underline" field={item}>
                  {item.link_label}
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
