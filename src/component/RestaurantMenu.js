import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_COM_URL } from "../constants";
import Shimmer from "./Shimmar";
import  useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{
    const {resId} = useParams();

    const [restaurantDetails,restaurantMenu]=useRestaurant(resId);
    const dispatch = useDispatch();
    const addFoodItem= (item) =>{
        console.log(item)
        dispatch(addItem(item))
    }
    return (!restaurantMenu) ? <Shimmer/>:(
        <div className="flex" key="31353">
            <div>
            <h1>{"Restaurant id :" +resId}</h1>
            <h2>{restaurantDetails.name}</h2>
            <img src={IMG_COM_URL+restaurantDetails.cloudinaryImageId} al="image"/>
            <h3>{restaurantDetails.area}</h3>
            <h3>{restaurantDetails.city}</h3>
            <h3>{restaurantDetails.avgRating}</h3>
            <h3>{restaurantDetails.costForTwo}</h3> 
            </div>
            {/* <div>
                <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()}>Add item</button>
            </div> */}
            <div key="223421">
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurantMenu).map((item)=>(<li key={item.card.info.id}>{item.card.info.name} <button className="p-1 bg-green-50" onClick={()=>addFoodItem(item.card.info.name)}>Add item</button></li>))}
                
            </ul>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;