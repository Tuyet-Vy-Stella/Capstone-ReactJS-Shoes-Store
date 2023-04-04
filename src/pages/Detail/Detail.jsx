import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  addToCart,
  changeQuantity,
  getDetailApi,
} from "../../redux/reducers/productReducer";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Detail() {
  const { detailProduct, quantityBuy } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    let { id } = params;
    dispatch(getDetailApi(id));
  }, [params.id]);

  const renderDetailProduct = () => {
    return (
      <div class="Detail-crs">
        <div className="img-product">
          <img src={detailProduct.image} alt="..." />
        </div>
        <div className="Product__Detail__right">
          <div className="Product__Item">
            <h1>{detailProduct.name}</h1>
          </div>
          <div className="Product__Item">
            <p>{detailProduct.description}</p>
          </div>
          <div className="Product__Item">
            <h2>Available Size</h2>
          </div>
          <div className="Product__Item1">
            {detailProduct.size?.map((size, index) => {
              return (
                <div class="item-number" key={index}>
                  <input type="radio" className="size-input" name="size" />
                  <label className="size-label" htmlFor="size">
                    {size}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="Product__Item">
            <p className="Item-monney">{detailProduct.price}$</p>
          </div>
          <div className="Product__Item__Button">
            <button
              onClick={() => {
                dispatch(changeQuantity(true));
              }}
            >
              +
            </button>
            <p>{quantityBuy}</p>
            <button
              onClick={() => {
                dispatch(changeQuantity(false));
              }}
            >
              -
            </button>
          </div>
          <div className="Product__Item__Button2">
            <button
              onClick={() => {
                dispatch(addToCart({ ...detailProduct, quantityBuy }));
                toast.success("Added to your cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderRelateProduct = () => {
    return detailProduct.relatedProducts?.map((item, index) => {
      return (
        <div class="col-4 mt-5" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };

  return (
    <div>
      <section class="Product__Detail">
        <div class="container">
          <div id="detail">{renderDetailProduct()}</div>
        </div>
      </section>
      <section class="Relate__Product">
        <div class="container">
          <div class="Relate__text text-center">
            <h1>-Realate Product -</h1>
          </div>
          <div id="relate" class="row">
            {renderRelateProduct()}
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}