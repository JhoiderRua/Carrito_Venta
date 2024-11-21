import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import productsModule from "./Products.module.css";

const Product = ({ product, quantity, model }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">{product.title}</h4>
          <h5>Cantidad:{product.quantity} </h5>
          <h5>Modelo: {product.model}</h5>
          <h5 class="">${product.price}</h5>
          <button
            className={productsModule.button}
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
