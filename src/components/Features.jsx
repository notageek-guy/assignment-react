import React from "react";
const blurred = `
    bg-[#ccc] w-[60px] rounded-full h-[60px] sm:w-[80px] sm:w-[80px] blur-md
    `;
export default function Features() {
  return (
    <>
      <div className="container font-lora italic max-w-2xl mx-auto p-4 mt-8 w-[90%]  rounded-3xl ">
        <Title />
       <div className="border flex flex-col sm:flex sm:flex-row rounded-2xl p-4 justify-between ">
       <Row1 />
        <Row2 />
        <Row3 />
       </div>
      </div>
    </>
  );
}
const rowStyle = `flex  sm:flex sm:flex-col gap-2  items-center justify-between `;
const Row1 = () => {
  return (
    <>
      <div className={`${rowStyle}`}>
        <div className={`${blurred}`}></div>
        <div>
          <h2 className="text-center">Create your card in just 5 mins</h2>
        </div>
      </div>
    </>
  );
};

const Row2 = () => {
  return (
    <>
      <div className={`${rowStyle}`}>
        <div className={`${blurred} `}></div>
        <div className="">
          <p className="">Customize the Text with</p>
        </div>
      </div>
    </>
  );
};

const Row3 = () => {
  return (
    <>
      <div className={`${rowStyle}`}>
        <div className={`${blurred} `}></div>
        <div className="">
          <p>Editing is available</p>
          <p>after purchase also</p>
        </div>
      </div>
    </>
  );
};

const Title = () => (
  <>
    <h1 className="text-center text-3xl font-lora font-[300] italic  tracking-wide ">Features</h1>
  </>
);
