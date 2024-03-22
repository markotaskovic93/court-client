import FiltersContainer from "../../containers/filters";
import ProductContainer from "../../containers/products/products-container";
import ProductLayout from "../../layouts/ProductLayout";

const ProductsPage = () => {
  return (
    <ProductLayout 
      leftSide={
        <FiltersContainer 
          className=""
        />
      }
      central={
        <ProductContainer 
          className=""
        />
      }
    />
  )
}

export default ProductsPage;
