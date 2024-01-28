import { create } from "zustand";

import ProductStoreType from "../types/ProductStoreType";
import ProductType from "../types/ProductType";
import { API_URL } from "../utils/Helpers";
import FilterState from "../types/FilterStateType";

const useProductStore = create<ProductStoreType>((set) => ({
  products: [] as ProductType[],
  loading: false,
  error: null,
  filters: FilterStateType,

  fetchProducts: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw Error("Error During Fetching Data");
      }
      const data = await response.json();
      set({
        products: data,
        loading: false,
        error: null,
      });
    } catch (err: any) {
      set({
        products: [],
        loading: false,
        error: err.message,
      });
    }
  },
  setSelectedColor: (color: string) => {
    set({ selectedColor: color });
  },
  setSelectedGender: (gender: string) => {
    set({ selectedGender: gender });
  },
  setSelectedPriceRange: (priceRange: string) => {
    set({ selectedPriceRange: priceRange });
  },
  getProducts() {
    return this.products;
  },
  getProductById(productId) {
    return this.products.find((item) => item.id === productId);
  },
}));

export default useProductStore;
