import React from "react";
import { FaUser } from "react-icons/fa";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function SidebarComponent() {

  const navigate = useNavigate();

  return (
    <Sidebar aria-label="sidebar" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <span onClick={() => navigate("/dash/products")}>
            <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
          </span>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <span onClick={() => navigate("/dash/users")}>
            <Sidebar.Item icon={FaUser}>User</Sidebar.Item>
          </span>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <span onClick={() => navigate("/dash/product-cards")}>
            <Sidebar.Item icon={FaUser}>Product Cards</Sidebar.Item>
          </span>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
