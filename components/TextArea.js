const TextArea = ({
  value,
  label,
  placeholder,
  isDisabled,
  isRequired,
  error,
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex-grow text-[13px] mb-2 font-medium">
          <span>
            {label} {isRequired && <span className="text-red-400">*</span>}
          </span>
        </div>
      )}

      <textarea
        value={value}
        placeholder={placeholder}
        className={`min-h-[128px] text-sm py-2 px-2 focus:outline-2 outline-custom-tertiary w-full disabled:text-gray-400 disabled:bg-gray-100 resize-none border rounded`}
        disabled={isDisabled}
        onChange={onChange}
      />

      <div className="flex items-center h-8">
        <p className="font-medium text-red-600 text-[11px]">{error}</p>
      </div>
    </div>
  );
};

export default TextArea;
