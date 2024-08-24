import CardPizza from "./components/CardPizza";
import { Container, Row, Col } from "react-bootstrap";
// import Header from "./components/Header";
import { useState, useEffect } from "react";
import { pizzas } from "./data/pizzas.js";

function Home() {
 const [pizzaList, setPizzaList] = useState([]);

 useEffect(() => {
  setPizzaList(pizzas);
 }, []);

 return (
  <Container className="my-4" style={{ maxWidth: "1200px" }}>
   <Row className="justify-content-center py-4 px-2">
    {pizzaList.map((pizza) => (
     <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4">
      <CardPizza pizza={pizza} />
     </Col>
    ))}
   </Row>
  </Container>
 );
}

export default Home;
