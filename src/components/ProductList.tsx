import { useEffect, useState } from "react";
import useProductStore from "../store/productStore";
import Product from "./Product";

const ProductList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const productState = useProductStore.getState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await productState.fetchProducts();
        setLoading(false);
        console.log("Fetched products");
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const products = productState.getProducts();
  return (
    <div className="flex flex-wrap justify-center items-between ">
      {loading ? (
        <div>Loading...</div>
      ) : products.length === 0 ? (
        <div>No products found</div>
      ) : null}
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
