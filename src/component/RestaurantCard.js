import { useContext } from "react";
import { restaurantList } from "../constants";
import { IMG_COM_URL } from "../constants";
// import { useContext } from "react";
// import { useState } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // console.log(props)
  const {user}= useContext(UserContext)
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_COM_URL+cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} </h4>
      <h5>{user.name}</h5>

    </div>
  );
};
export default RestrauntCard;