import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <NavLink to="/" style={{fontsize:"10px"}} className="text-decoration-none text-light mx-3 fs-5">ImgUpload</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
            <NavLink to="/register" className="text-decoration-none text-light mx-3">AddProducts</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default header;
