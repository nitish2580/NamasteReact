import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = (val)=>{
  return true
}

const Title = () => (
  <img className="h-28 p-2 " src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"></img>
);
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="h-4">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
            </li>
          <li className="px-2">
          <Link to="/about">About</Link>
          </li>
          
          <li className="px-2">
          <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
          <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
          <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {(isLoggedIn)?<button onClick={()=>setIsLoggedIn(false)}>Login</button>:<button onClick={()=>setIsLoggedIn(true)}>Logout</button>}
    </div>
  );
};
export default Header;
