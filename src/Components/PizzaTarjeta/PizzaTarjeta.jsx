import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PizzaTarjeta.css";
import { useNavigate } from "react-router-dom";
import Gcontext from "../../Context/Gcontext";

const PizzaTarjeta = ({ pizza }) => {
  const {AñadirCarrito, formatCurrency} = useContext(Gcontext);
  const navigate = useNavigate();

  const detallePizza = (name) => {
    navigate(`/pizza/${name}`);
  };

  const agregarAlCarrito = (id) => {
    AñadirCarrito(id);
  };

  return (
    <Card className="CardContainer" style={{ width: "25vw", margin: "1em" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title className="CardTitle">{pizza.name}</Card.Title>
        <br />
        <Card.Text>
          <ul>
            {pizza.ingredients.map((ing, i) => {
              return <li className="inghover" key={i}>🍕{ing}</li>;
            })}
          </ul>
        </Card.Text>
        <br />
        <Card.Title className="CardTitle"> {formatCurrency(pizza.price)}.-</Card.Title>
        <div className="ButtonContainer">
          <Button
            className="p-1 m-2"
            variant="dark"
            onClick={() => detallePizza(pizza.name)}
          >
            Detalles👀
          </Button>
          <Button
            className="px-2 m-2"
            variant="danger"
            onClick={() => agregarAlCarrito(pizza.id)}
          >
            Añadir🛒{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaTarjeta;
