import { useState,useEffect } from "react"
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId)=> {
    const [restaurantDetails,setRestaurantDetails] = useState({})
    const [restaurantMenu,setRestaurantMenu] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        try {
            const data=await fetch(FETCH_MENU_URL+resId);
            const json=await data.json();
            setRestaurantDetails(json?.data.cards[0]?.card?.card?.info);
            setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards)
            console.log(json)
            console.log(restaurantMenu);
        } catch (error) {
            console.log(error)
        }
    }
    return [restaurantDetails,restaurantMenu]
}
export default useRestaurant;
