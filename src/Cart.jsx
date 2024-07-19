import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="card cart-card">
      <div className="card-body">
        <h4 className="card-title">
          Cart <i className="fa-solid fa-cart-shopping"></i>
        </h4>
        {cart.length === 0 ? (
          <>
            <p className="card-text">Your cart is empty </p>
            <p className="card-text border-bottom pb-2">Add some </p>
          </>
        ) : (
          <ul className="list-group list-group-flush border-bottom pb-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className=" col-4 d-flex align-items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <div>
                    <h6>{item.title}</h6>
                    <p>${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3">
          <p>Subtotal: ${calculateTotal()}</p>
          <p>Shipping: Free</p>
          <p>Total: ${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
