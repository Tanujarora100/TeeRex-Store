import React from "react";
import ProductType from "../types/ProductType";

const Product: React.FC<ProductType> = ({ ...product }) => {
  const { imageURL, name, type, price, currency, color, gender, quantity } =
    product;
  return (
    <div>
      <img src={imageURL} alt={name} />
      <p>{name}</p>
      <p>{type}</p>
      <p>{price}</p>
      <p>{currency}</p>
      <p>{color}</p>
      <p>{gender}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default Product;
