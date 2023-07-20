import React from "react";

export default function Headermain() {
  return (
    <div className="header my-2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light fixed-top navy">
        <a className=" font-weight-bolder ml-4 title" href="/">
          Shri Ram Ji
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 mr-3">
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="http://localhost:3000/gallery"
              >
                Our Store
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="http://localhost:3000/about"
              >
                About
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="http://localhost:3000/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}
