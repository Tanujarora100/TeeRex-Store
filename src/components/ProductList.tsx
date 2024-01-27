import { useEffect } from "react";
import useProductStore from "../store/productStore";
import Product from './Product';

const ProductList = () => {
  const productState = useProductStore.getState();
  useEffect(() => {
    productState.fetchProducts();
  }, []);

  const products = productState.getProducts();
  return <div>
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </div>;
};

export default ProductList;
