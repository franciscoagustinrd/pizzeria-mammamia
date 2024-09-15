import React, { useContext } from "react";
import PizzaCart from "../components/PizzaCart.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";

function Cart() {
 const { cart, addToCart, removeFromCart, totalPrice } =
  useContext(CartContext);

 const handleCountChange = (pizza, delta) => {
  const newCount = pizza.quantity + delta;

  if (newCount <= 0) {
   removeFromCart(pizza.id);
  } else {
   addToCart(pizza);
  }
 };

 return (
  <Container>
   <Row>
    <Col>
     <h1 className="text-center p-2">Selecciona tus pizzas</h1>
    </Col>
   </Row>
   <Row>
    {cart.map((pizza) => (
     <Col key={pizza.id} xs={12} sm={6} md={3} lg={3} className="mb-4">
      <PizzaCart
       pizza={pizza}
       onCountChange={(delta) => handleCountChange(pizza, delta)}
       initialCount={pizza.quantity}
      />
     </Col>
    ))}
   </Row>

   <Row className="d-flex">
    <Col className="text-center justify-content-center p-2">
     <h2>Tu pedido</h2>
     <ul className="list-group w-75 mx-auto">
      {cart.map((pizza) => (
       <li className="list-group-item" key={pizza.id}>
        {pizza.name}: {pizza.quantity}
       </li>
      ))}
     </ul>
     <h4 className="mt-2">Total a pagar</h4>
     <h3 className="text-danger">${formatPrice(totalPrice)}</h3>
     <Button variant="danger" className="mt-2 mb-3" size="lg">
      Pagar tu pizza{" "}
     </Button>
    </Col>
   </Row>
  </Container>
 );
}

export default Cart;
