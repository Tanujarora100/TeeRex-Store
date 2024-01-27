import ProductType from "./ProductType";

interface ProductStoreType {
  products: ProductType[];
  loading: boolean;
  error: string | null;
  selectedColor: string;
  selectedGender: string;
  selectedPriceRange: string;

  fetchProducts: () => Promise<void>;

  getProducts: () => ProductType[];
  getProductById: (productId: number) => ProductType | undefined;
  setSelectedColor: (color: string) => void;
  setSelectedGender: (gender: string) => void;
  setSelectedPriceRange: (priceRange: string) => void;
}

export default ProductStoreType;
