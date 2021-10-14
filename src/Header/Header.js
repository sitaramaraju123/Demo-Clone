import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_opLineOne">Hello Guest</span>
            <span className="header_opLinetwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_opLineOne">Returns</span>
          <span className="header_opLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_opLineOne">Your</span>
          <span className="header_opLinetwo">Prime</span>
        </div>
        <Link to="/Cart">
          <div className="header_opBasket">
            <ShoppingBasketIcon />
            <span className="header_opLinetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
