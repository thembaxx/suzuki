"use client";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

const ScrollTopButton = () => {
  return (
    <button
      type="button"
      className="flex items-center font-medium text-sm py-2 px-4 -ml-4 text-custom-tertiary"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <span>Top of Page</span>
      <div className="h-4 w-4 ml-2">
        <ArrowSmallUpIcon />
      </div>
    </button>
  );
};

export default ScrollTopButton;
