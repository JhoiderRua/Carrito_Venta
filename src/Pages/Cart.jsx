//React
import React, { useContext } from "react";
//style
import cartModule from "./Cart.module.css";
import { CartContext } from "../Features/ContextProvider";
//Componentes
import CartProduct from "../Components/CartProduct";
//freactures
import { totalItem, totalPrice } from "../Features/CartReducer";
//Buttom
import Button from "../Components/Button";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <section className={cartModule.contenedor}>
        {cart.map((p) => (
          <CartProduct product={p}></CartProduct>
        ))}
      </section>
      <section className={cartModule.products}>
        <h5 className={cartModule.h5}>Cantidad: {totalItem(cart)}</h5>
        <h5 className={cartModule.h5}>Total Precio: ${totalPrice(cart)} </h5>
      </section>
    </>
  );
};

export default Cart;
