import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1rem;
    margin-left: 2rem;
    color: #18a0fb;
    font-family: "Pt Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
    &:first-of-type {
      margin-left: 0rem;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 1rem;
    margin-top: 0;
    padding-top: 0;
    text-align: center;
    a {
      font-size: 1.5rem;
      margin-left: 0;
      color: #18a0fb;
      font-family: "Pt Sans", sans-serif;
    }
  }
`;

const Navegacion = () => {
  return (
    <Nav>
      {/* <Link to="/">Inicio</Link>
      <Link to="/">Nosotros</Link>
      <Link to="/">Actividades</Link>
      <Link to="/">Novedades</Link>
      <Link to="/">Testimonios</Link>
      <Link to="/">Contacto</Link>
      <Link to="/">Contribuye</Link> */}
    </Nav>
  );
};

export default Navegacion;
