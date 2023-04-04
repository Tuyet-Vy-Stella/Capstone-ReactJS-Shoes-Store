import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function ProductCard(props) {
  const [favoriteProduct, setFavoriteProduct] = useState(false);
  const { product } = props;

  const handleClick = () => {
    setFavoriteProduct(!favoriteProduct);
  };

  const toggleClass = favoriteProduct ? "active" : "";
  return (
    <div className="card">
      <div className="favorite-item">
        <i
          class={`fa-solid fa-heart ${toggleClass}`}
          onClick={() => {
            handleClick();
          }}
        ></i>
      </div>
      <img className="w-100" src={product.image} alt="..." />
      <div className="card-body">
        <h2>{product.name}</h2>
        <p>{product.shortDescription}</p>
      </div>
      <div className="card-footer">
        <NavLink to={`/detail/${product.id}`} className="btn">
          Buy Now
        </NavLink>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}
