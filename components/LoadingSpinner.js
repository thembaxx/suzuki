import Spinner from "./Spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center flex-grow justify-center w-full min-h-16 pb-6 h-full">
      <Spinner />
    </div>
  );
};

export default LoadingSpinner;
