import React from "react";

import { Outlet } from "react-router-dom";

import NavbarComponent from "../../components/NavbarComponent";
import SidebarComponent from "../../components/SidebarComponent";

function MainLayout() {
  return (
    <>
      <NavbarComponent />

      <div className="flex">
        <SidebarComponent />
        <div className="p-5 overflow-auto h-screen w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
