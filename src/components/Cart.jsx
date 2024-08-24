import React, { useState } from "react";
import PizzaCart from "./PizzaCart";
import { pizzaCart as pizzas } from "../data/pizzas.js";
import { Container, Row, Col, Button } from "react-bootstrap";

function Cart() {
 const [selectedPizzas, setSelectedPizzas] = useState([]);

 const handleCountChange = (pizzaId, newCount) => {
  const pizza = pizzas.find((p) => p.id === pizzaId);

  setSelectedPizzas((prevSelectedPizzas) => {
   if (newCount === 0) {
    return prevSelectedPizzas.filter((p) => p.id !== pizzaId);
   } else {
    const pizzaExists = prevSelectedPizzas.find((p) => p.id === pizzaId);
    if (pizzaExists) {
     return prevSelectedPizzas.map((p) =>
      p.id === pizzaId ? { ...p, count: newCount } : p
     );
    } else {
     return [...prevSelectedPizzas, { ...pizza, count: newCount }];
    }
   }
  });
 };

 const calculateTotal = () => {
  return selectedPizzas.reduce(
   (total, pizza) => total + pizza.price * pizza.count,
   0
  );
 };

 return (
  <Container>
   <Row>
    <Col>
     <h1 className="text-center p-2">Selecciona tus pizzas</h1>
    </Col>
   </Row>
   <Row>
    {pizzas.map((pizza) => (
     <Col key={pizza.id} xs={12} sm={6} md={3} lg={3} className="mb-4">
      <PizzaCart
       pizza={pizza}
       onCountChange={handleCountChange}
       initialCount={selectedPizzas.find((p) => p.id === pizza.id)?.count || 0}
      />
     </Col>
    ))}
   </Row>

   <Row className="d-flex">
    <Col className="text-center justify-content-center p-2">
     <h2>Tu pedido</h2>
     <ul className="list-group w-75 mx-auto">
      {selectedPizzas.map((pizza) => (
       <li className="list-group-item" key={pizza.id}>
        {pizza.name}: {pizza.count}
       </li>
      ))}
     </ul>
     <h4 className="mt-2">Total a pagar</h4>
     <h3 className="text-danger">${calculateTotal()}</h3>
     <Button variant="danger" className="mt-2 mb-3" size="lg">
      Pagar tu pizza{" "}
     </Button>
    </Col>
   </Row>
  </Container>
 );
}

export default Cart;
