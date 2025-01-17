import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <Link to={"/dash"} className=" text-2xl">
        Go to dash
      </Link>
    </div>
  );
}

export default HomePage;
