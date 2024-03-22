
export const buildFiltersFromQueryString = (params: URLSearchParams) => {
  const filters: { [key: string]: string[] } = {};

  params.forEach((value, key) => {
    const queryValue = decodeURIComponent(value.replace(/\+/g, " "));
    filters[key] = queryValue.split(' ');
  });

  return filters;
}

export const prepareQueryString = (queryString: URLSearchParams, key: string = "", value: string = "") => {
  const params = new URLSearchParams(queryString);
  const queryByKey = params.get(key);

  if (queryByKey) {
    const valuesByKey = decodeURIComponent(queryByKey.replace(/\+/g, " ")).split(" ");

    if (valuesByKey.includes(value)) {
      if (valuesByKey.length === 1) {
        params.delete(key);
      } else {
        const filteredActiveValues = valuesByKey.filter(val => val !== value);
        const preparedValues = filteredActiveValues.join(" ");
        params.set(key, preparedValues);
      }
    } else {
      valuesByKey.push(value);
      params.set(key, valuesByKey.join("+"));
    }
  } else {
    params.set(key, value);
  }

  const updatedQueryString = params.toString();
  return updatedQueryString ? `?${updatedQueryString}` : "";
}
