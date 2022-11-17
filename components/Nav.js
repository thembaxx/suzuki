import React from "react";
import Image from "next/image";
import Logo from "../public/suzuki logo.svg";

const Nav = () => {
  return (
    <div className="px-4 py-5 pr-6 flex justify-between items-center">
      <div className="flex justify-left">
        <Image className="h-6" src={Logo} alt="" />
        <p className="text-xs font-bold mt-[6px]">Rosebank</p>
      </div>
      <div className="flex uppercase font-semibold text-xs gap-4 tracking-wide">
        <a href="#">Vehicles</a>
        <a href="#">Parts & Services</a>
        <a href="#">Finance</a>
        <a href="#">Contact us</a>
      </div>
    </div>
  );
};

export default Nav;
