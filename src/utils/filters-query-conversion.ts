import { TFilter } from '../providers/filters-provider';

type TFilterValue = string | number;

export const filtersToQueryString = (filters: TFilter[]) => {
  const groupedFilters: Record<string, TFilterValue[]> = {};
  
  filters.forEach(filter => {
    const key = Object.keys(filter)[0];
    const value = filter[key];
    groupedFilters[key] = groupedFilters[key] ? [...groupedFilters[key], value] : [value];
  });

  const queryParams = Object.entries(groupedFilters).map(([key, values]) => {
    const encodedValues = Array.isArray(values) ? values.map(value => 
      encodeURIComponent(String(value))).join('+') : encodeURIComponent(String(values));
    
    return `${key}=${encodedValues}`;
  });

  return `?${queryParams.join('&')}`;
}

export const queryStringToFilters = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const filters = [];

  for (const [key, value] of params.entries()) {
    if (value.includes('+')) {
      const values = value.split('+');

      values.forEach(v => {
        const filter = { [key]: v };
        filters.push(filter);
      });
    } else if (value.includes(' ')) {
      const values = value.split(' ');
      
      values.forEach(v => {
        const filter = { [key]: v };
        filters.push(filter);
      });
    } else {
      const filter = { [key]: value };
      filters.push(filter);
    }
  }

  return filters;
}
