import React from "react";

const Header = () => {
  return (
    <div className="flex py-2 px-6 sticky top-0 justify-end  text-sm text-teal-600 font-medium">
      <a className="flex mr-5" href="tel:0123456789">
        <span className="">+27 12 456 7890</span>
      </a>
      <a className="flex" href="mailto:hello@heycarter.co.za">
        <span className="">hello@heycarter.co.za</span>
      </a>
    </div>
  );
};

export default Header;
