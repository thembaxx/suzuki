"use client";
import React, { useId, useState } from "react";

const ExclamationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#dc2626"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const TextField = React.forwardRef(
  (
    {
      value,
      label,
      placeholder,
      isRequired,
      type = "text",
      autoFocus = false,
      isDisabled,
      error,
      onFocusChange,
      onChange,
      ...rest
    },
    ref
  ) => {
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
          className={`flex items-center border rounded relative overflow-hidden w-full ${
            isDisabled && "bg-gray-100"
          } ${focused && "outline outline-2 outline-custom-tertiary"}`}
        >
          <input
            id={textFieldId}
            ref={ref}
            className={`text-sm py-2 px-2 outline-none flex-grow disabled:text-gray-400 ${
              error && "pr-8"
            }`}
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
          {error && (
            <div className="absolute right-0 flex items-center justify-center h-8 w-8">
              <ExclamationIcon />
            </div>
          )}
        </div>
        <div className="flex items-center h-8">
          <p className="font-medium text-red-600 text-[11px]">{error}</p>
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";

const TextFieldx = ({
  value,
  label,
  placeholder,
  isRequired,
  type = "text",
  autoFocus = false,
  isDisabled,
  error,
  onFocusChange,
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
        className={`flex items-center border rounded relative overflow-hidden w-full ${
          isDisabled && "bg-gray-100"
        } ${focused && "outline outline-2 outline-custom-tertiary"}`}
      >
        <input
          id={textFieldId}
          className={`text-sm py-2 px-2 outline-none flex-grow disabled:text-gray-400 ${
            error && "pr-8"
          }`}
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
        {error && (
          <div className="absolute right-0 flex items-center justify-center h-8 w-8">
            <ExclamationIcon />
          </div>
        )}
      </div>
      <div className="flex items-center h-8">
        <p className="font-medium text-red-600 text-[11px]">{error}</p>
      </div>
    </div>
  );
};

export default TextField;
