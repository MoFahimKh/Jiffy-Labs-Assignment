export const handleCheckboxChange = (
  filter: string,
  FILTERS: string[],
  selectedFilters: string[],
  setSelectedFilters: any
) => {
  let newSelectedFilters: string[];
  if (filter === "All") {
    if (selectedFilters.includes("All")) {
      newSelectedFilters = [];
    } else {
      newSelectedFilters = FILTERS;
    }
  } else {
    if (selectedFilters.includes(filter)) {
      newSelectedFilters = selectedFilters.filter((item) => item !== filter);
      newSelectedFilters = newSelectedFilters.filter((item) => item !== "All");
    } else {
      newSelectedFilters = [...selectedFilters, filter];
      if (newSelectedFilters.length === FILTERS.length - 1) {
        newSelectedFilters.push("All");
      }
    }
  }
  setSelectedFilters(newSelectedFilters);
};
