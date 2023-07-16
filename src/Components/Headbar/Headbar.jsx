import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink ,Link } from "react-router-dom";
import Gcontext from "../../Context/Gcontext";
import './Headbar.css'

const Headbar = () => {
  const { total, formatCurrency } = useContext(Gcontext);
  

  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link className="ContainerNav" to='/'><h1>🍕Mammamia</h1></Link>
          </Navbar.Brand>
          <NavLink className="ContainerNav fw-bold " to='/carro'>🛒Total: {formatCurrency(total)}</NavLink>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Headbar;