import React, { useEffect, useState } from "react";
import HeroSectionsComponent from "./../../components/HeroSectionsComponent";
import SpecialComponent from "../../components/SpecialComponent";

function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
        });
    };
    fetchProducts();
  }, []);

  // console.log("products", products);

  return (
    <>
      <HeroSectionsComponent />
      <SpecialComponent products={products} />
    </>
  );
}

export default Home;
