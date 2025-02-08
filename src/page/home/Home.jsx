import React, { useEffect, useState } from "react";
import HeroSectionsComponent from "./../../components/HeroSectionsComponent";
import SpecialComponent from "../../components/SpecialComponent";
import CategoryComponent from "../../components/CategoryComponent";
import { HR } from "flowbite-react";

function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("http://localhost:16800/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    };
    fetchProducts();
  }, []);

  // console.log("products", products);

  return (
    <>
      <HeroSectionsComponent />
      <SpecialComponent products={products} />
      <HR />
      <CategoryComponent />
      <HR />
    </>
  );
}

export default Home;
