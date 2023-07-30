import { base_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
  name = "",
  cuisines = [],
  area = "",
  lastMileTravelString = "",
  costForTwoString = "",
  avgRating = "",
}) => {
  return (
    <div className="card">
      <img src={base_URL + cloudinaryImageId} />
      <div className="cardDetails">
        <h2 className="cardTitle">{name}</h2>
        <h3 className="type">{cuisines.join(", ")}</h3>
        <h4 className="rating">{avgRating} star</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
