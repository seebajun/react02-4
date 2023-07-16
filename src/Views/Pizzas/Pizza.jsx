import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Gcontext from "../../Context/Gcontext";
import { Button, Card } from "react-bootstrap";
import "./Pizza.css";

const Pizza = () => {
  const { name } = useParams();
  const { pizza, formatCurrency } = useContext(Gcontext);

  const pizzaDetalle = pizza.find((p) => p.name === name);

  return (
    <div className="text-center mx-auto cardContainer">
      <Card>
        <div className="row no-gutters">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card.Img variant="top" src={pizzaDetalle.img} className="w-75" />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title className="fw-bold">{pizzaDetalle.name}:</Card.Title>
              <Card.Text>{pizzaDetalle.desc}</Card.Text>
              <Card.Text>
                <strong>Ingredientes:</strong>
                <ul className="list-unstyled">
                  {pizzaDetalle.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕{ingredient}</li>
                  ))}
                </ul>
                <Card.Title className="fw-bold">
                  <strong>Precio: </strong>
                  {formatCurrency(pizzaDetalle.price)}.-
                </Card.Title>
              </Card.Text>

              <div className="buttonContainer">
                <Button variant="success">
                  <Link className="btnDetalle" to="/">
                    Home 🏠
                  </Link>
                </Button>
                <Button variant="warning">
                  <Link className="btnDetalle2" to="/carro">
                    Carrito 🛒
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pizza;
