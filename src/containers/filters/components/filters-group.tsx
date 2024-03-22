import { PropsWithChildren } from "react";
import Divider from "../../../components/ui/Divider";
import Filter, { FilterProps } from "./filter";
import FiltersTitle, { FilterTitle } from "./filter-title";

interface FiltersGroupProps {
  title?: string;
  className?: string;
}

const FiltersGroup: React.FC<PropsWithChildren<FiltersGroupProps>> & { 
  Filter: React.FC<FilterProps>, 
  Title: React.FC<FilterTitle>, 
  Divider: React.FC<{ className?: string; }> } = 
({
  children,
  className
}) => (
  <div className={className}>
    { children }
  </div>
);

FiltersGroup.Filter = Filter;
FiltersGroup.Title = FiltersTitle;
FiltersGroup.Divider = Divider;

export default FiltersGroup;
