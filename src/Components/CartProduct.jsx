//Hooks
import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  return (
    <div className="d-flex border mb-3">
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <h5>Cantidad: {product.quantity}</h5>
        <div className="buttons">
          <button className="px-2" onClick={() => Decrease(product.id)}>
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button className="px-2" onClick={() => Increase(product.id)}>
            <b>+</b>
          </button>
        </div>
        <button
          className="blue"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
