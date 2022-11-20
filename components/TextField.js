import React, { useId, useState } from "react";

const TextField = ({
  value,
  label,
  placeholder,
  isRequired,
  type = "text",
  autoFocus = false,
  isDisabled,
  onFocusChange,
  error,
  onChange,
  ...rest
}) => {
  const textFieldId = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <div className="flex-grow text-[13px] mb-2 font-medium">
          <span>
            {label} {isRequired && <span className="text-red-400">*</span>}
          </span>
        </div>
      )}
      <div
        className={`border rounded relative overflow-hidden w-full ${
          isDisabled && "bg-gray-100"
        }`}
      >
        <input
          id={textFieldId}
          className="text-sm py-2 px-2 focus:outline-2 w-full disabled:text-gray-400"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          type={type}
          autoFocus={autoFocus}
          autoComplete="none"
          spellCheck="false"
          onFocus={() => {
            setFocused(true);
            onFocusChange && onFocusChange(true);
          }}
          onBlur={() => {
            setFocused(false);
            onFocusChange && onFocusChange(false);
          }}
          {...rest}
          onChange={onChange}
        />
      </div>
      <div className="flex items-center h-8">
        <p className="font-medium text-red-600 text-[11px]">{error}</p>
      </div>
    </div>
  );
};

export default TextField;
