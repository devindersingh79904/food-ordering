import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {

  //state variable are always declared inside a component function never outside 
  const [isLogin, setIsLogin] = useState(false);
  
  //if no dependency array is passed, useEffect will be called on every render
  //if empty dependency array is passed, useEffect will be called only once initial render

  useEffect(() => {
    console.log("Use Effect Call");
  }, [isLogin]);

  
  
  onBtnClick = () => {
    setIsLogin(!isLogin);
   // isLogin = !isLogin;
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact" >Contact us</Link></li>
          <li>Cart</li>
          { !isLogin ? (
            <li>
              <button className="login-btn" onClick={onBtnClick}>login</button>
            </li>
          ) : (
            <li>
              <button className="logout-btn" onClick={onBtnClick}>logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
