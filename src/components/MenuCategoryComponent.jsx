import React from 'react'
import { Link } from 'react-router-dom';

function MenuCategoryComponent() {
  return (
    <div className='flex flex-col border-r-2 gap-2 text-lg'>
      <Link>Woman’s Fashion</Link>
      <Link>Men’s Fashion</Link>
      <Link>Electronics</Link>
      <Link>Home & Lifestyle</Link>
      <Link>Medicine</Link>
      <Link>Sports & Outdoor</Link>
      <Link>Baby’s & Toys</Link>
      <Link>Groceries & Pets</Link>
      <Link>Health & Beauty</Link>
    </div>
  );
}

export default MenuCategoryComponent
