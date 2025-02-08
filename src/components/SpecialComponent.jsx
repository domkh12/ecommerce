import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardProductComponent from "./CardProductComponent";

function SpecialComponent({ products }) {
  // console.log("props", products);
  return (
    <section className="px-[160px]">
      {/* today's */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-orange-500 rounded-md"></div>
        <p className="text-orange-500 font-semibold text-xl">Today's</p>
      </div>

      {/* time up special event */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex gap-20 items-end">
          {/* Flash Shales */}
          <p className="text-[34px] font-semibold">Flash Sales</p>
          {/* time  */}
          <div className="flex items-center gap-5">
            <p>
              <span className="text-[16px] font-semibold">Days</span> <br />
              <span className="text-[34px] font-bold">12</span>
            </p>
            <div className="flex flex-col gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <p>
              <span className="text-[16px] font-semibold">Hours</span> <br />
              <span className="text-[34px] font-bold">1</span>
            </p>
            <div className="flex flex-col gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <p>
              <span className="text-[16px] font-semibold">Minutes</span> <br />
              <span className="text-[34px] font-bold">17</span>
            </p>
            <div className="flex flex-col gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <p>
              <span className="text-[16px] font-semibold">Seconds</span> <br />
              <span className="text-[34px] font-bold">52</span>
            </p>
          </div>
        </div>
        {/* button back and next */}
        <div>
          <button className="bg-gray-300 p-4 rounded-full mr-3">
            <FaArrowLeft />
          </button>
          <button className="bg-gray-300 p-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* product card */}
      <div className="flex gap-5 overflow-auto">
        {products?.map((product) => (
          <CardProductComponent key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
        <button className="bg-orange-500 py-3 px-5 text-white rounded-md">
          View All Products
        </button>
      </div>
    </section>
  );
}

export default SpecialComponent;
