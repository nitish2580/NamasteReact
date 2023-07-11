import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_COM_URL } from "../constants";
import Shimmer from "./Shimmar";

const RestaurantMenu=()=>{
    const {resId} = useParams();

    const [restaurantDetails,setRestaurantDetails] = useState({})
    const [restaurantMenu,setRestaurantMenu] = useState(null)

    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        try {
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7963827&lng=75.815382&restaurantId="+resId);
            const json=await data.json();
            setRestaurantDetails(json?.data.cards[0]?.card?.card?.info);
            setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
            console.log(json)
            console.log(restaurantMenu)
        } catch (error) {
            console.log(error)
        }

    }
    // if(!restaurantDetails){
    //     return <Shimmer/>
    // }
    return (!restaurantMenu) ? <Shimmer/>:(
        <div className="menu" key="31353">
            <h1>{"Restaurant id :" +resId}</h1>
            <h2>{restaurantDetails.name}</h2>
            <img src={IMG_COM_URL+restaurantDetails.cloudinaryImageId} al="image"/>
            <h3>{restaurantDetails.area}</h3>
            <h3>{restaurantDetails.city}</h3>
            <h3>{restaurantDetails.avgRating}</h3>
            <h3>{restaurantDetails.costForTwo}</h3> 
                
            <div key="223421">
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurantMenu).map((item)=>(<li key={item.card.info.id}>{item.card.info.name}</li>))}
                
            </ul>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;