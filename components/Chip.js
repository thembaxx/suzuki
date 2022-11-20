const Chip = ({ label, children }) => {
  return (
    <div className="px-3 py-1 border border-gray-200 rounded text-[11px] font-medium">
      {children ?? label}
    </div>
  );
};

export default Chip;
