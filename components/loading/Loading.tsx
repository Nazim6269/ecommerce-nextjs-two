const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin  rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
    </div>
  );
};

export default LoadingSpinner;