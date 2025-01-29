import React from 'react'
import MenuCategoryComponent from './MenuCategoryComponent'
import SlideShowComponent from './SlideShowComponent';

function HeroSectionsComponent() {
  return (
    <div className="grid grid-cols-6 w-full px-[160px] py-[60px]">
      <div className='col-start-1 col-end-2'>
        <MenuCategoryComponent />
      </div>
      <div className="col-start-3 col-end-7">
        <SlideShowComponent />
      </div>
    </div>
  );
}

export default HeroSectionsComponent
