import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
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
