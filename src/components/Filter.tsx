import { useState } from "react";
import useProductStore from "../store/productStore";
import Checkbox from "./CheckBox";

const Filter = () => {
  const { setSelectedColor, setSelectedGender, setSelectedPriceRange } =
    useProductStore();

  // Create state variables to manage the checked state for each filter option
  const [colorFilters, setColorFilters] = useState({
    Red: false,
    Green: false,
    Blue: false,
  });

  const [genderFilters, setGenderFilters] = useState({
    Male: false,
    Female: false,
  });

  const [priceRangeFilters, setPriceRangeFilters] = useState({
    "0-250Rs": false,
    "250-450Rs": false,
    "450Rs-Above": false,
  });

  // Function to handle color filter selection
  const handleColorFilter = (color: string) => {
    setSelectedColor(color);
  };

  // Function to handle gender filter selection
  const handleGenderFilter = (gender: string) => {
    setSelectedGender(gender);
  };

  // Function to handle price range filter selection
  const handlePriceFilter = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
  };

  return (
    <div className="py-4 px-6 bg-gray-200 mt-12">
      <div className="color-filter mb-4">
        <h2 className="text-lg font-bold mb-2">Color</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="Red"
              className="filter-red-checkbox"
              checked={colorFilters.Red}
              onChange={() => {
                handleColorFilter("Red");
                setColorFilters({ ...colorFilters, Red: !colorFilters.Red });
              }}
            />
          </li>
          <li className="mb-2">
            <Checkbox
              label="Green"
              className="filter-green-checkbox"
              checked={colorFilters.Green}
              onChange={() => {
                handleColorFilter("Green");
                setColorFilters({
                  ...colorFilters,
                  Green: !colorFilters.Green,
                });
              }}
            />
          </li>
          <li>
            <Checkbox
              label="Blue"
              className="filter-blue-checkbox"
              checked={colorFilters.Blue}
              onChange={() => {
                handleColorFilter("Blue");
                setColorFilters({ ...colorFilters, Blue: !colorFilters.Blue });
              }}
            />
          </li>
        </ul>
      </div>

      <div className="gender-filter mb-4">
        <h2 className="text-lg font-bold mb-2">Gender</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="Male"
              className="filter-male-checkbox"
              checked={genderFilters.Male}
              onChange={() => {
                handleGenderFilter("Male");
                setGenderFilters({
                  ...genderFilters,
                  Male: !genderFilters.Male,
                });
              }}
            />
          </li>
          <li>
            <Checkbox
              label="Female"
              className="filter-female-checkbox"
              checked={genderFilters.Female}
              onChange={() => {
                handleGenderFilter("Female");
                setGenderFilters({
                  ...genderFilters,
                  Female: !genderFilters.Female,
                });
              }}
            />
          </li>
        </ul>
      </div>

      <div className="price-filter">
        <h2 className="text-lg font-bold mb-2">Price</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="0-250Rs"
              className="filter-250Rs-checkbox"
              checked={priceRangeFilters["0-250Rs"]}
              onChange={() => {
                handlePriceFilter("0-250Rs");
                setPriceRangeFilters({
                  ...priceRangeFilters,
                  "0-250Rs": !priceRangeFilters["0-250Rs"],
                });
              }}
            />
          </li>
          <li className="mb-2">
            <Checkbox
              label="250-450Rs"
              className="filter-250Above-checkbox"
              checked={priceRangeFilters["250-450Rs"]}
              onChange={() => {
                handlePriceFilter("250-450Rs");
                setPriceRangeFilters({
                  ...priceRangeFilters,
                  "250-450Rs": !priceRangeFilters["250-450Rs"],
                });
              }}
            />
          </li>
          <li>
            <Checkbox
              label="450Rs-Above"
              className="filter-450Above-checkbox"
              checked={priceRangeFilters["450Rs-Above"]}
              onChange={() => {
                handlePriceFilter("450Rs-Above");
                setPriceRangeFilters({
                  ...priceRangeFilters,
                  "450Rs-Above": !priceRangeFilters["450Rs-Above"],
                });
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
