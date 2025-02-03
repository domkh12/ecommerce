import { Rating } from "flowbite-react";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CardProductComponent({ product }) {
  const navigate = useNavigate();
  // console.log("product", product);
  return (
    <div className="group">
      <div className="w-[300px] h-[300px] bg-gray-200 relative flex justify-center items-center rounded-md overflow-hidden">
        <img
          src={product.images[0]}
          alt="product"
          className="w-[140px] h-[140px]"
        />

        <p className="bg-orange-500 px-3 py-1 rounded-lg text-white absolute top-3 left-3">
          -{product.discountPercentage}%
        </p>

        <div className="absolute top-3 right-4 flex flex-col gap-2">
          <button className="bg-white p-3 rounded-full">
            <FaHeart className="w-5 h-5" />
          </button>
          <button className="bg-white p-3 rounded-full">
            <FaEye className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="bg-black w-[300px] text-white absolute bottom-0 py-3 hidden group-hover:block"
        >
          Add To Cart
        </button>
      </div>

      <div className="mt-5">
        <p>{product.title}</p>
        <p className="flex gap-3">
          <span className="text-red-500">${product.price}</span>
          {/* <s className="text-gray-500">$120</s> */}
        </p>
        <div className="flex items-center gap-3">
          <Rating>
            <Rating.Star />
          </Rating>
          <p>({product.rating})</p>
        </div>
      </div>
    </div>
  );
}

export default CardProductComponent;
