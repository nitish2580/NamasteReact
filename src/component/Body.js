import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmar";
import { Link } from "react-router-dom";

function filterData(searchTxt,restaurants){
    return restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
}


// <----------------------------------Body--------------------->
const Body = () => {
    const [allRestaurants,setAllRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const [searchTxt,setSearchText] = useState("");
    // <--------------------UseEffect------------------/>
    useEffect(()=>{
      getRestaurants()
    },[])
    // <------------------------getRestaurants------------------------>
    async function getRestaurants(){
      try {
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7963827&lng=75.815382&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      } catch (error) {
        console.log("Error: ", error)
      }
      
    }


    // <----------------------Rendering------------------------------------/>
    if(!allRestaurants.length){
      return <Shimmer/>
    }
    if(filteredRestaurants.length===0){
      return <h2>Restaurants Not found</h2>
    }
    return (allRestaurants.length===0)?(<Shimmer/>):(
    <>
    <div className="search-container">  
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(e)=>{
            setSearchText(e.target.value)
            }
        }
        />
        {/* <h2>{val}</h2> */}
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchTxt,allRestaurants)
           setFilteredRestaurants(data);
        }}>Search</button>
    </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {

          /*Restaurnt not found condition you should write here*/
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
              <RestrauntCard {...restaurant.data}  /></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;