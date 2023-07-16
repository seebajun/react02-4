import React, { useContext } from "react";
import Gcontext from "../../Context/Gcontext";
import { Row, Col } from "react-bootstrap";
import PizzaTarjeta from "../../Components/PizzaTarjeta/PizzaTarjeta.jsx";

const Home = () => {
  const { pizza } = useContext(Gcontext);

  return <div>
    <Row>
    {
      pizza.map((p,i)=>{
        return <Col ><PizzaTarjeta key={i} pizza={p}></PizzaTarjeta></Col>
      })
    }

    </Row>



  </div>;
};

export default Home;
