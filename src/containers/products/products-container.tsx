import { useFilters } from "../../providers/filters-provider";
import { filtersToQueryString, queryStringToFilters } from "../../utils/filters-query-conversion";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "./productApi";

const ProductContainer = ({ 
  className 
}: { 
  className?: string; 
}) => {
  const location = useLocation();
  // const { data: products, isLoading, isError  } = useGetProductsQuery(queryString);
 

  return (
    <div className={className}>
      
    </div>
  )
}

export default ProductContainer;
