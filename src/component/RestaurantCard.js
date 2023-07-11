import { restaurantList } from "../constants";
import { IMG_COM_URL } from "../constants";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // console.log(props)
  return (
    <div className="card">
      <img src={IMG_COM_URL+cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestrauntCard;