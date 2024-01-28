interface FilterState {
  color: string | null;
  gender: string | null;
  priceRange: string | null;
  setColorFilter: (color: string | null) => void;
  setGenderFilter: (gender: string | null) => void;
  setPriceRangeFilter: (priceRange: string | null) => void;
}
export default FilterState
