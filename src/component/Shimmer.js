const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-80 h-80 bg-gray-200 m-5 p-2 shadow-[rgba(33,_35,_38,_0.1)_0px_10px_10px_-10px] rounded-lg"
          >
            <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
            <div className="w-3/5 h-7 bg-gray-300 mt-2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
