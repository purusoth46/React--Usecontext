import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text ">{product.description}</p>

        <div className="card-btn-group mt-auto d-flex justify-content-between">
          <h5> ${product.price}</h5>
          <div className="btn-group">
            <button
              type="submit"
              className="btn btn-warning btn-block "
              onClick={() => addToCart(product)}
            >
              <i className="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
