import { useLocation, useNavigate } from "react-router-dom";
import Box from "../../components/ui/Box";
import Button from "../../components/ui/Button";
import FiltersGroup from "./components/filters-group";
import { BRAND_FILTERS, SIZE_FILTERS, COLOR_FILTERS } from "./data/data"
import { buildFiltersFromQueryString, prepareQueryString } from "./utils/build-filters-from-url";

type Filters = {
  [key: string]: string[]
}

type Props = {
  className?: string;
}

const FiltersContainer: React.FC<Props> = ({
  className
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryString = new URLSearchParams(location.search);
  const filters: Filters = buildFiltersFromQueryString(queryString);

  const handleFilterSelected = (key: string, value: string) => {
    const preparedQueryString = prepareQueryString(queryString, key, value);
    navigate(preparedQueryString);
  }

  const clearFilters = () => {
    navigate("/products");
  }

  return (
    <div className={className}>
      <Box
        className=""
      >
        { Object.keys(filters).length !== 0 && (
          <Button onClick={clearFilters}>Clear filters</Button>
        )}
        
        { Object.entries(filters).map(([key, value]) => value.map(val => (
          <Button 
            className="p-2 m-2 bg-red" 
            key={val} 
            onClick={() => handleFilterSelected(key, val)}
          >
            { key }: { val }
          </Button>
        ))) }
      </Box>

      { [BRAND_FILTERS, SIZE_FILTERS, COLOR_FILTERS].map((filterGroup => (
          <FiltersGroup
            className="p-4"
            key={filterGroup.filterTitle}
          >
            <FiltersGroup.Title 
              title={filterGroup.filterTitle}
              className="text-white"
            />
            <FiltersGroup.Divider className="h-1 bg-red w-full mb-2" />
            { filterGroup.values.map(value => (
              <FiltersGroup.Filter
                className="cursor-pointer select-none"
                key={`${filterGroup.filterName}-${value}`}
                filter={{ [filterGroup.filterName]: value }}
                onFilterSelect={handleFilterSelected}
                checked={filters[filterGroup.filterName]?.includes(value)}
              />
            )) }
          </FiltersGroup>
      ))) }
    </div>
  );
}

export default FiltersContainer;
