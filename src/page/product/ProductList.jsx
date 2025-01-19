import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("http://localhost:16800/api/v1/products").then((response) => {
      response.json().then((data) => {
        setProduct(data);
      });
    });
  }, []);

  console.log("product", product);

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="text-xl font-medium">Product List</h1>
        <Button onClick={() => navigate("/dash/products/new")}>Add New</Button>
      </div>
      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {product?.map((product) => {
              return (
                <Table.Row
                  key={product.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.id}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="w-[120px] rounded-2xl overflow-hidden">
                      <img
                        src={product.image}
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>{product.description}</Table.Cell>
                  <Table.Cell>៛{product.price}</Table.Cell>
                  <Table.Cell>{product.category.name}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default ProductList;
