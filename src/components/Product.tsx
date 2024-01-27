import React from "react";
import ProductType from "../types/ProductType";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

const Product: React.FC<ProductType> = ({ ...product }) => {
  const { imageURL, name, price, currency } = product;

  const addToCart = () => {
    toast.success(`Added "${name}" to the cart`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-xl p-3 m-1 max-w-sm">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-64 rounded-lg mb-2 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-lg font-semibold text-indigo-600 mb-2">{`${price} ${currency}`}</p>
      <div className="flex justify-end">
        <button
          className="text-2xl text-indigo-600 cursor-pointer"
          onClick={addToCart}
        >
          <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
};

export default Product;
