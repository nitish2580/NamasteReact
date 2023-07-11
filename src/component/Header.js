import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = (val)=>{
  return true
}

const Title = () => (
  <img src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"></img>
);
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="header">
      <Title />
  
      <div className="nav-items">
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li>
          </Link>
        </ul>
      </div>
      {(isLoggedIn)?<button onClick={()=>setIsLoggedIn(false)}>Login</button>:<button onClick={()=>setIsLoggedIn(true)}>Logout</button>}
    </div>
  );
};
export default Header;
