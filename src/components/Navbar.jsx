import { Link, NavLink } from "react-router-dom";
import Cart from '../images/icon-cart.svg'
import Avatar from "../images/image-avatar.png"
import '../css/Navbar.css'
import {useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import CartContext from "../context/CartContext";
const Navbar = () => {
  let [toggle, setToggle] = useState(false)  
  let {product} = useContext(ProductContext)
  let {cart} = useContext(CartContext)
  return (
    <>
      <nav>
        <div className="nav-left-side">
          <Link to={"#"} className="logo">
            sneakers
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to={"/"}>Collections</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to={"/men"}>Men</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to={"/women"}>Women</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right-side">
          <ul className="cart-and-user">
            <li>
              <Link to={"#"} className="cart" onClick={() => setToggle(!toggle)}>
                <img src={Cart} alt="Cart" />
                {cart.length > 0 ? <span className="bradecrumb">{cart.length}</span> : ""}                
              </Link>
              <div className={toggle ? "my-cart toggle-my-cart" : "my-cart"}>
                <header>
                  <span>Cart</span>
                </header>
                <div className="my-items">
                  {
                    cart.length > 0 ? cart.map((item, index) => (
                      <div key={index} className="cart-items">
                        
                      </div>
                    )) : <span>Your cart is empty</span>
                  }
                </div>
              </div>
            </li>
            <li>
              <Link to={"#"} className="avatar"> <img src={Avatar} alt="Avatar" /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
