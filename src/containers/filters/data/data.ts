export type TFilters = {
  filterName: string;
  filterTitle: string;
  filterType: string;
  filters: {
    filterValue: string;
  }[];
}

export const BRAND_FILTERS = {
  filterName: "brand",
  filterTitle: "Brands",
  filterType: "LIST",
  values: ["Nike", "Adidas", "Puma"]
};

export const SIZE_FILTERS = {
  filterName: "size",
  filterTitle: "Sizes",
  filterType: "BLOCKS",
  values: ["42", "43", "44"]
};

export const COLOR_FILTERS = {
  filterName: "color",
  filterTitle: "Colors",
  filterType: "BLOCKS",
  values: ["white", "orange", "brown"]
};
