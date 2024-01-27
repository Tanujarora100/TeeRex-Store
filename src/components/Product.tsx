import React from "react";
import ProductType from "../types/ProductType";

const Product: React.FC<ProductType> = ({ ...product }) => {
  const { imageURL, name, type, price, currency, color, gender, quantity } =
    product;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 max-w-xs">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-auto rounded-lg mb-2"
        style={{ maxHeight: "150px" }}
      />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-600">{type}</p>
      <p className="text-lg font-semibold mt-2">{`${price} ${currency}`}</p>
      <span className="flex p-2 justify-between align-middle">
      <p className="text-gray-600 m-1">{color}</p>
      <p className="text-gray-600 m-1">{gender}</p>
      </span>
     
     
    </div>
  );
};

export default Product;
