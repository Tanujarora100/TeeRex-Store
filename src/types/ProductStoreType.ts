import FilterState from "./FilterStateType";
import ProductType from "./ProductType";

interface ProductStoreType {
  products: ProductType[];
  loading: boolean;
  error: string | null;
  filters: FilterState; 
  fetchProducts: () => Promise<void>;

  getProducts: () => ProductType[];
  getProductById: (productId: number) => ProductType | undefined;
  setFilter: (filterType: string, value: string | null) => void; // Set a filter value
}

export default ProductStoreType;
