const TextArea = ({
  value,
  label,
  placeholder,
  isDisabled,
  isRequired,
  minHeight = 200,
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
        className="min-h-[128px] text-sm py-2 px-2 focus:outline-2 w-full disabled:text-gray-400 disabled:bg-gray-100 resize-none border rounded"
        disabled={isDisabled}
        minHeight={minHeight}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
