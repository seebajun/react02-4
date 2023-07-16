import React, { useContext } from "react";
import Gcontext from "../../Context/Gcontext";
import Table from "react-bootstrap/Table";
import "./Carro.css";
import { Button } from "react-bootstrap";

const Carro = () => {
  const { carrito, pizza, total, formatCurrency } = useContext(Gcontext);

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((p) => {
            const newPizza = pizza.find((pz) => pz.id === p.id);
            const totalPrecio = newPizza.price * p.cantidad;

            return (
              <tr key={p.id}>
                <td>
                  <div className="pizza-cell">
                    <img
                      src={newPizza.img}
                      alt={newPizza.name}
                      width="50"
                      className="mr-2"
                    />
                    <span> 🍕 {newPizza.name}</span>
                  </div>
                </td>
                <td>{p.cantidad}</td>
                <td>{formatCurrency(newPizza.price)}</td>
                <td>{formatCurrency(totalPrecio)}.-</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right fw-bold">
              Total:
            </td>
            <td className="fw-bold d-flex justify-content-between">
              {formatCurrency(total)}.-
              <Button variant="success">Comprar 💸</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default Carro;
