import React from "react";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function MainLayout() {
  return (
    <>
      <Navbar fluid className="bg-orange-500">
        <Navbar.Brand href="#">
          <img src="/image/logo.png" className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
            Ecommerce
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>

      <div className="flex">
        <Sidebar aria-label="sidebar" className="h-screen">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={"products"}>
                <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={"users"}>
                <Sidebar.Item icon={FaUser}>User</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
