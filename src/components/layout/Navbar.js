import React, { useEffect } from "react";
import { logo } from "../../data";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }, []);
  return (
    <nav className="nav " id="nav">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-list">
          <li>
            <Link className="nav-list-item" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-list-item shop-link" to="shop">
              Shop
            </Link>
          </li>

          <li>
            <Link className="nav-list-item cart-link" to="cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
