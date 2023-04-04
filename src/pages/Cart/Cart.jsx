import React, { useState } from "react";
import TableCart from "../../components/TableCart/TableCart";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, getStore } from "../../util/tools";
import { useDispatch, useSelector } from "react-redux";
import { submitOrderApi } from "../../redux/reducers/userReducer";
export default function Cart() {
  const [order, setOrder] = useState({ orderDetail: [], email: "" });
  const { arrCart } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const orderArr = [];
  for (let orderDetail of arrCart) {
    orderArr.push({
      orderId: orderDetail.id,
      quantity: orderDetail.quantityBuy,
    });
  }

  if (!getStore(ACCESS_TOKEN)) {
    //Nếu chưa đăng nhập => Chuyển hướng trang
    // Swal.fire({
    //   icon: "warning",
    //   title: "Đăng nhập để vào trang này",
    // });
    alert("Đăng nhập để vào trang này !!!");
    return <Navigate to="/login" />;
  }

  return (
    <section className="cart_detail">
      <div className="container">
        <h1 className="cart_detail-title">Carts</h1>
        <TableCart arrProduct={arrCart} />
        <div className="text-end">
          <button
            className="btn cart_detail-btn"
            onClick={() => {
              setOrder({ orderDetail: orderArr, email: userLogin.email });
              dispatch(submitOrderApi(order));
            }}
          >
            Submit order
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
