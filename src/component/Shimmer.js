const Shimmer = () => {
  return (
    <div className="restraunts">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmerCard">
            <div className="shimmerImg"></div>
            <div className="shimmerHeading"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
