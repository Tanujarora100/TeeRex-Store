import { useEffect, useState } from "react";
import useProductStore from "../store/productStore";
import Product from "./Product";
import Filter from "./Filter";
import ProductType from "../types/ProductType";
import ProductStoreType from "../types/ProductStoreType";

const ProductList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const productState = useProductStore.getState();
  const { selectedColor, selectedGender, selectedPriceRange } =
    useProductStore<ProductStoreType>;
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
  }, [productState]);

  const products = productState.getProducts();

  const filterProducts = (products: ProductType[]) => {
    let filteredProducts = [...products];
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color == selectedColor
      );
    }
    if (selectedGender) {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender == selectedGender
      );
    }
    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case "0-250Rs":
          filteredProducts = filteredProducts.filter((product) => {
            return product.price <= 250;
          });
          break;
        case "250-450Rs":
          filteredProducts = filteredProducts.filter((product) => {
            return product.price >= 250 && product.price <= 449;
          });
          break;
        case "450Rs-Above":
          filteredProducts = filteredProducts.filter((product) => {
            return product.price >= 450;
          });
          break;
        default:
          break;
      }
    }
  };
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
