//Hooks
import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
//React-Router-Dom
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
//Component
import navbarModule from "./Navbar.module.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className={navbarModule.navbar}>
      <ul className={navbarModule.menu}>
        <li className={navbarModule.item}>
          <Link to="/" className={navbarModule.link}>
            Tienda
          </Link>
        </li>
        <li className={navbarModule.item}>
          <Link className={navbarModule.link} to="/cart">
            <BsCart className={navbarModule.icon} />
            {cart.length}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
