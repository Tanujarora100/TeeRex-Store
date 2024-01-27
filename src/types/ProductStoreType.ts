import ProductType from "./ProductType";
interface ProductStoreType {
  products: ProductType[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;

  getProducts: () => ProductType[];
  getProductById: (productId: number) => ProductType | undefined;
  getProductsByColor: (color: string) => ProductType[];
  getProductsByCategory: (category: string) => ProductType[];
  getProductsByGender: (gender: string) => ProductType[];
}
export default ProductStoreType;
