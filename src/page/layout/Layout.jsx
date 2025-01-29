import React from 'react'
import HeaderDiscountComponent from '../../components/HeaderDiscountComponent';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main>
      <HeaderDiscountComponent />
      <NavbarComponent />
      <Outlet/>
      <FooterComponent />
    </main>
  );
}

export default Layout
