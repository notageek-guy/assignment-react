import React from 'react'

import bgImg from "../assets/bg.jpg";
export default function Details() {
  return (
    <div className="relative text-center italic font-lora ">
    <img
      src={bgImg}
      alt="bg--image"
      className="  object-cover h-[30vh] w-[92vw] "
      style={{
        borderRadius: "3rem 3rem 2rem 3rem",
      }}
    />
    <div className="absolute inset-5 text-center">
      <h1 className="text-3xl  text-white">Digit Card Details</h1>
    </div>
  </div>
  )
}
