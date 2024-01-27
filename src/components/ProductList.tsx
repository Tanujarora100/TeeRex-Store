import { useEffect, useState } from "react";
import useProductStore from "../store/productStore";
import Product from "./Product";
import Filter from "./Filter";

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
    <div className="flex flex-wrap justify-center items-start p-4">
      <div className="w-auto md:w-1/4">
        <Filter />
      </div>
      <div className="w-full md:w-3/4">
        {loading ? (
          <div>Loading...</div>
        ) : products.length === 0 ? (
          <div>No products found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
