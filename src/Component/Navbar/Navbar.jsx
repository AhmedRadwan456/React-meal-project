import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="navbar bg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className=" d-flex justify-content-center m-auto align-items-center">
            <a
              className="nav-link text-black fa-2x px-2"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100033680709348"
            >
              <i className="fa-brands fa-1x fa-facebook"></i>
            </a>
            <a
              className="nav-link text-black fa-2x px-2"
              target="_blank"
              href="https://www.instagram.com/_ahmedradwan4_/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>{" "}
            <a
              className="nav-link text-black fa-2x px-2"
              target="_blank"
              href="https://www.linkedin.com/in/ahmed-radwan-17634a265/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="nav-link text-black fa-2x px-2"
              target="_blank"
              href="https://github.com/AhmedRadwan456"
            >
            <i className="fa-brands fa-github"></i>
            </a>{" "}
          </div>
          <Link className="navbar-brand " to="/">
            <img className=" logo" src={logo} />
          </Link>

          <div
            className="offcanvas bg-black offcanvas-start"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-white">
              <Link
                id="offcanvasNavbarLabel"
                to={"/"}
                className="offcanvas-title"
              >
                <img className="logo " src={logo} />
              </Link>

              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end  text-center flex-grow-1 pe-3">
                <li className="nav-item ">
                  <Link className="nav-link text-white" to="/search">
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/area"}>
                    Area
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/ingredient">
                    Ingredient
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contactUs">
                    {" "}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
