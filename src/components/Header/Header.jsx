import React from "react";
import logo from "../../assets/img/image3.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { arrCart } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const totalQuantity = arrCart.reduce((total, item, index) => {
    return (total += item.quantityBuy);
  }, 0);

  const renderLogin = () => {
    if (userLogin === null) {
      return (
        <div className="d-flex">
          <div className="user-login">
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className="user-register">
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <NavLink  to="/profile">
          <div className="profile-circle">
           <img src={userLogin.avatar} alt="..." />
          </div>
        </NavLink>
      );
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/#">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="user-interact">
          <div className="search-header">
            <NavLink className="search-btn" to="/search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </div>

          <div className="cart">
            <div className="cart-icon">
              <NavLink to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <span>({totalQuantity})</span>
            </div>
          </div>

          {renderLogin()}
        </div>
      </div>
    </header>
  );
}
