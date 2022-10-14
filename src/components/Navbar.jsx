import React, { useEffect, useState } from "react";

import logo from "../assets/Logo.png";
export default function Navbar() {
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
  return width < breakPoint ? <SmallerScreen /> : <LargeScreen />;
}

const Logo = ({ size }) => (
  <>
    <img src={logo} alt="logo" className={`${size} `} />
  </>
);
const LargeScreen = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Logo size={"w-24"} />
      </div>
      <div className="navbar-center ">
        <ul className="flex gap-10">
          <li>Wedding Cards</li>
          <li>BirthDay Cards</li>
          <li>Feeling Cards</li>
          <li>Anniversary Cards</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-2">Login | Signup</button>
      </div>
    </div>
  );
};

const SmallerScreen = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center ">
          <Logo size={"w-28"} />
        </div>
      </div>
    </>
  );
};
