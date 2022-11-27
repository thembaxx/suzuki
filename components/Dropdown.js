import React, { useEffect, useState } from "react";

import Select, { generateChildren } from "./Select";
import Spinner from "./Spinner";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

// MAIN COMPONENT
const Dropdown = ({
  placeholder,
  label,
  value,
  options,
  isRequired,
  isDisabled,
  isLoading,
  menuWidth,
  render,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = useState(value);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSelectedItem(value);

    return () => {
      setSelectedItem(null);
    };
  }, [value]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex-grow text-[13px] mb-2 font-medium">
          <span>
            {label} {isRequired && <span className="text-red-400">*</span>}
          </span>
        </div>
      )}
      <Select
        value={selectedItem}
        isDisabled={isDisabled}
        width={menuWidth}
        render={() => {
          return (
            <button
              className={`flex items-center border rounded relative overflow-hidden w-full ${
                isDisabled && "bg-gray-100"
              } ${open && "outline outline-2 outline-custom-tertiary"}`}
              disabled={isDisabled}
              onClick={(e) => {
                e.preventDefault();
                e.currentTarget.focus();
              }}
            >
              <p
                className={`text-sm text-left py-2 px-2 text-ellipsis outline-none overflow-hidden mr-3 flex-grow disabled:text-gray-400`}
              >
                {value ?? placeholder}
              </p>
              <div className="flex items-center justify-center h-8 w-10">
                {!isLoading && (
                  <ChevronDownIcon
                    height={16}
                    width={16}
                    style={{ opacity: 0.8 }}
                  />
                )}
                {isLoading && (
                  <div>
                    <Spinner classNameSize="h-4 w-4" />
                  </div>
                )}
              </div>
            </button>
          );
        }}
        openChange={(value) => setOpen(value)}
        onChange={onChange}
      >
        {generateChildren("Dealership", options)}
      </Select>
    </div>
  );
};

export default Dropdown;
