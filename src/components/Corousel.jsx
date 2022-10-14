import React from "react";
import img1 from "../assets/Page1.jpg";
import img2 from "../assets/Page2.jpg";
import img3 from "../assets/Page3.jpg";

export default function Corousel() {
  return (
    <>
      <div className="flex items-center px-3">
        <div className="relative">
          <Image src={img1} className="w-24 sm:w-32 shadow-md shadow-gray-800 z-30 rounded   " />
        </div>
        <div>
          <Image src={img2} className='w-20 sm:w-28 shadow-md rounded shadow-gray-800 z-20' />
        </div>
        <div>
          <Image src={img3} className='w-20  sm:w-24 z-10 relative -ml-1 rounded shadow-md shadow-gray-800' />
        </div>
      </div>
    </>
  );
}

const Image = ({ src, className }) => (
  <>
    <img src={src} className={`${className}`} />
  </>
);
