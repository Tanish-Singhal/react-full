const Shimmer = () => {

  const count = 12;
  const items = Array.from({ length: count });

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {items.map((res) => (
        <div className="flex m-2 p-2 border animate-pulse" key={res}>
          <div>
            <div className="bg-gray-200 h-40 w-40"></div>
            <div className="bg-gray-200 h-4 w-40 mt-2"></div>
            <div className="bg-gray-200 h-4 w-40 mt-2"></div>
            <div className="bg-gray-200 h-4 w-40 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
