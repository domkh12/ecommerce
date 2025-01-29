import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function NavbarComponent() {

  return (
    <nav className='flex justify-between items-center px-[160px] pt-[50px] pb-[25px] border-b-[2px]'>
      <h1 className='text-3xl font-semibold'>Angkor Shop</h1>

      <ul className='flex gap-10 text-lg'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/sign-up">Sign Up</Link>
      </ul>

      <div className='flex items-center gap-4'>
        <input type="text" name="search" id="search" placeholder="search..." className='rounded-lg'/>
        <button>
          <FaCartShopping className='w-7 h-7'/>
        </button>
      </div>
    </nav>
  );
}

export default NavbarComponent
