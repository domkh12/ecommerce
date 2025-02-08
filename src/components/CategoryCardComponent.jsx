import React from "react";

function CategoryCardComponent() {
  return (
    <div className="flex flex-col w-[200px] h-[200px] border-[3px] rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd7uIYksU3lV1apAkWG5hKmiDBZ7lsgaxeA&s"
          alt="category_img"
          className="w-40 h-40"
        />
        <p>Phones</p>
      </div>
    </div>
  );
}

export default CategoryCardComponent;
