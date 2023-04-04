import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top footer-element">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="item">
                <h2>Get help</h2>
                <ul>
                  <li>Home</li>
                  <li>Nike</li>
                  <li>Adidas</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-4 middle">
              <div className="item">
                <h2>Support</h2>
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Help</li>
                  <li>Phone</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="item">
                <h2>register</h2>
                <ul>
                  <li>
                    <NavLink className="link" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
      </div>
    </footer>
  );
}
