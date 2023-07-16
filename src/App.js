import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Views/Home/Home.jsx";
import Carro from "./Views/Carro/Carro.jsx";
import Pizza from "./Views/Pizzas/Pizza.jsx";

import Gcontext from "./Context/Gcontext.jsx";

import Headbar from "./Components/Headbar/Headbar.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pizza, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const AñadirCarrito = (id) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index >= 0) {
      carrito[index].cantidad++;
      setCarrito([...carrito]);
    } else {
      carrito.push({ id: id, cantidad: 1 });
      setCarrito([...carrito]);
    }
  };

  useEffect(() => {
    const calcularTotal = () => {
      let total = 0;
      carrito.forEach((p) => {
        const newPizza = pizza.find((pz) => pz.id === p.id);
        const totalPrecio = newPizza.price * p.cantidad;
        total += totalPrecio;
      });
      setTotal(total);
    };

    calcularTotal();
  }, [carrito, pizza]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(value);
  };

  const getPizzas = async () => {
    const res = await fetch("http://localhost:3000/pizzas.json");
    const datos = await res.json();
    setPizzas([...datos]);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="App">
      <Gcontext.Provider
        value={{
          pizza,
          total,
          setTotal,
          AñadirCarrito,
          carrito,
          setCarrito,
          formatCurrency,
        }}
      >
        <BrowserRouter>
          <Headbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pizza/:name" element={<Pizza />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </Gcontext.Provider>
    </div>
  );
}

export default App;
