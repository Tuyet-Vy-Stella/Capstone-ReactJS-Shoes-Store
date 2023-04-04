import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// css
import "./assets/sass/style.scss";
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { Routes, Route } from "react-router-dom";
// set up redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import {createBrowserHistory} from 'history';

//Cấu hình history (Chuyển hướng không cần hook navigate)
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          {/* <Route path="facebook-login" element={<LoginFacebook />}></Route> */}
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
