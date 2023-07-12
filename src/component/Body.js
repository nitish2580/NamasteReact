import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmar";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_RESTUARANT_URL } from "../constants";
import useOnline from "../utils/useOnline";



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
        const data=await fetch(FETCH_RESTUARANT_URL)
        const json=await data.json();

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      } catch (error) {
        console.log("Error: ", error)
      }
      
    }

    const offline=useOnline();
    if(!offline){
      return<h1>Offline, Check your internet connection</h1>
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
    <div className="search-container p-5 bg-pink-50 my-5 ">  
        <input 
        type="text"
        className="focus:bg-green-50 p-2 m-2"
        placeholder="Search"
        value={searchTxt}
        onChange={(e)=>{
            setSearchText(e.target.value)
            }
        }
        />
        {/* <h2>{val}</h2> */}
        <button className="
        search-btn p-2 m-2 bg-purple-900 text-white rounded-md  hover:bg-violet-600" onClick={()=>{
            const data=filterData(searchTxt,allRestaurants)
           setFilteredRestaurants(data);
        }}>Search</button>
    </div>
      <div className="flex flex-wrap ">
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