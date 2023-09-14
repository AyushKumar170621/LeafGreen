import React from "react";
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location =  useLocation();

  return (
    <div className="container-fluid bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
          <button
            type="button"
            className="navbar-toggler ms-0 me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-0">
              <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <i className="fa fa-home">&nbsp;</i>Home
              </Link>
              <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                <i className="fa fa-address-book">&nbsp;</i>About
              </Link>
              <Link to="/products" className={`nav-item nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
                <i className="fa fa-gift">&nbsp;</i>Products
              </Link>
              <Link to="/login" className={`nav-item nav-link ${location.pathname === '/login' ? 'active' : ''}`}>
                <i className="fa fa-arrow-circle-right">&nbsp;</i>Login
              </Link>
              <Link to="/profile" className={`nav-item nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
                <i className="fa fa-user">&nbsp;</i>Profile
              </Link>
              <Link to="/cart" className={`nav-item nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>
                <i className="fa fa-cart-plus"></i>&nbsp;Cart
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-book-reader">&nbsp;</i>Pages
                </Link>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <a href="/contact" className="dropdown-item">
                    <i className="fa fa-mail-bulk">&nbsp;</i>Contact
                  </a>
                </div>
              </div>
            </div>
            {/* Search bar */}
            
          </div>
          <div className="ms-auto">
            <a href="https://res.cloudinary.com/dsjseacz5/image/upload/v1692620588/nfwdmflfe3zp3wn8qssb.png" className="navbar-brand ms-auto">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dsjseacz5/image/upload/v1692620588/nfwdmflfe3zp3wn8qssb.png"
                alt="Logo"
                style={{ maxWidth: "100px" ,marginLeft:"100px"}} // Adjust the max width as needed
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
