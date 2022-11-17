import React from "react";
import Image from "next/image";
import Logo from "../public/suzuki logo.svg";

const Nav = () => {
  return (
    <div className="px-4 py-4 flex justify-between">
      <div className="justify-left">
        <Image className="h-6" src={Logo} alt="" />
      </div>
      <div className="flex">
        <a className="mr-4">Vehicles</a>
        <a className="mr-4">Parts & Services</a>
        <a className="mr-4">Contact us</a>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
