import React from 'react'
import { Carousel } from "flowbite-react";

function SlideShowComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel pauseOnHover>
        <img
          src="/image/sliderImg.svg"
          alt="..."
        />
        <img
          src="/image/sliderImg.svg"
          alt="..."
        />
        <img
          src="/image/sliderImg.svg"
          alt="..."
        />
        <img
          src="/image/sliderImg.svg"
          alt="..."
        />
        <img
          src="/image/sliderImg.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default SlideShowComponent
