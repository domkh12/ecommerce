import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import CategoryCardComponent from './CategoryCardComponent';

function CategoryComponent() {
  return (
    <section className="px-[160px]">
      {/* today's */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-orange-500 rounded-md"></div>
        <p className="text-orange-500 font-semibold text-xl">Categories</p>
      </div>

      {/* time up special event */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex gap-20 items-end">
          {/* Flash Shales */}
          <p className="text-[34px] font-semibold mt-4">Browse By Category</p>
          
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

      {/* category card */}
      <CategoryCardComponent />

    </section>
  );
}

export default CategoryComponent
