import { 
  createContext, 
  PropsWithChildren, 
  useCallback, 
  useContext, 
  useState 
} from "react";
import isObjEqual from "../utils/deep-obj-equality";


export type TFilter = {
  [key: string]: string | number;
}

export type TFilterContextType = {
  selectedFilters: TFilter[];
  setFilters: (filters: TFilter[]) => void;
  isFilterSelected: (filter: TFilter) => boolean;
}

const FiltersContext = createContext<TFilterContextType | undefined>(undefined);

const FilterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState<TFilter[]>([]);

  const setFilters = useCallback((filters: TFilter[]) => {
    setSelectedFilters(filters);
  }, []);

  const isFilterSelected = useCallback((filter: TFilter): boolean => {
    return selectedFilters.some(selectedFilter => isObjEqual(selectedFilter, filter));
  }, [selectedFilters]);

  const values: TFilterContextType = {
    selectedFilters,
    setFilters,
    isFilterSelected
  };

  return (
    <FiltersContext.Provider value={values}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }

  return context;
};

export default FilterProvider;
