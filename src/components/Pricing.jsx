import React from "react";

export default function Pricing() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{width < 768 ? <MobileSection /> : <DesktopSection />}</>;
}

const MobileSection = () => {
  return (
    <>
      <div className="flex-col items-center mt-5  justify-center    py-4 ">
        <div className="flex  justify-center">
          <button className="text-xl    bg-black  rounded-3xl  text-center p-4 text-white">
            Try This Card
          </button>
        </div>
        <div className="flex mx-auto justify-center items-center mt-8">
          <div className="flex ">
            <p className="text-2xl pr-2">$499</p>
            <p className="text-xl">$2000</p>
          </div>
          <div className="">
            <p className="pl-2 text-xl text-green-500">75%Off</p>
          </div>
        </div>
        <div className="border border-black w-[50%] mx-auto "></div>
        <h2 className="text-center text-2xl py-2 ">Card Title</h2>
        <p className="text-center px-2 text-ellipsis tracking-wide leading-relaxed">
          Donec eu ornare mi. Sed Finibus condimentum mauris, ut dictum eros
          maximum vitae. Nullam condimenutm tortor ac elit
        </p>
      </div>
    </>
  );
};

const DesktopSection = () => {
  return (
    <div className="flex flex-col mb-auto">
      <h1 className="text-center text-2xl ">Card Title</h1>
      <div className="flex justify-center gap-3">
        <div className="flex">
          <p className="text-2xl px-1">$499</p>
          <p className="text-xl line-through ">$2000</p>
        </div>
        <div>
          <p className="text-green-500 text-xl">75%Off</p>
        </div>
      </div>
      <div className="w-72 px-2">
        <p className="text-center  text-ellipsis tracking-wide leading-relaxed">
          Donec eu ornare mi. Sed Finibus condimentum mauris, ut dictum eros
          maximum vitae. Nullam condimenutm tortor ac elit
        </p>
      </div>
      <button className="rounded-2xl bg-black mx-auto px-6 my-2 shadow-md shadow-gray-400 py-3 text-white">
        Try this Card
      </button>
    </div>
  );
};
