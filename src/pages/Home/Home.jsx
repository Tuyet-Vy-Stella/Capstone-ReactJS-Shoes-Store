import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductApi());
  }, []);
  console.log(arrProduct);
  const renderCarousel = () => {
    return arrProduct.map((item, index) => {
      if (index === 1) {
        return (
          <div className="carousel-item active" key={index}>
            <div className="carousel-item-content">
              <div className="carousel-left">
                <img src={item.image} alt="..." />
              </div>
              <div className="carousel-right">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <NavLink to={`/detail/${item.id}`} className="btn">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="carousel-item" key={index}>
            <div className="carousel-item-content">
              <div className="carousel-left">
                <img src={item.image} alt="..." />
              </div>
              <div className="carousel-right">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <NavLink to={`/detail/${item.id}`} className="btn">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <section className="slider">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div id="product-carousel" className="carousel-inner">
              {renderCarousel()}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="product-feature">
        <h1 className="text-center">Product Feature</h1>

        <div className="container">
          <div id="feature" className="row">
            {renderProduct()}
          </div>
        </div>
      </section>
    </div>
  );
}
