import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="logo">
        <img src="/image.png" alt="To-Let Logo" className="logo-img" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
          <li className="nav-item">
            <a className="nav-link " href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#property">Property Listing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#property">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
