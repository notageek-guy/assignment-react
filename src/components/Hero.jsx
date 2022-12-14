import React,{useState,useEffect}from "react";

import Corousel from "./Corousel";
import Details from "./Details";
import Pricing from "./Pricing";
const mobileLayout = `
 font-lora italic
  relative -mt-32 bg-white  mx-auto w-[90%] rounded-3xl p-5 flex flex-col items-center
  border-2 shadow-md shadow-gray-400
  
  `

  const desktopLayout = `
      relative
      -mt-36    bg-white 
      mx-auto 
      w-[80%]
      rounded-3xl
      flex
      justify-center 
      items-center
      border
     py-5 
     px-5



  `;
  
export default function Hero() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    localStorage.setItem("width", window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      localStorage.setItem("width", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  const breakPoint = 768;

  return (
    <div className="container mx-auto w-[80%] sm:w-[100%]  max-w-2xl sm:max-w-3xl mt-4  ">
      <Details/>
      {
        width < 768 ? <MobileScreenCorousel/> : <DesktopScreenCorousel/>
      }
    </div>
  );
}

const MobileScreenCorousel = () => {
  return (
    <>
    <div className={mobileLayout} >
      <Corousel/>
      <Pricing/>
    </div>

    
    </>
  )
}


const DesktopScreenCorousel = () => {
  return (
    <>
    <div className={desktopLayout}>
      <Corousel/>
      <Pricing/>
    </div>
    </>
  )


}


