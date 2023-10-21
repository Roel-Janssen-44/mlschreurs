/**
 * @typedef {import("@prismicio/client").Content.NavigatieItemSlice} NavigatieItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigatieItemSlice>} NavigatieItemProps
 * @param {NavigatieItemProps}
 */
const NavigatieItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navigatie_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavigatieItem;
