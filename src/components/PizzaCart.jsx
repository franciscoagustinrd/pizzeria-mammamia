import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function PizzaCart({ pizza, onCountChange, initialCount = 0 }) {
 const [count, setCount] = useState(initialCount);

 useEffect(() => {
  setCount(initialCount);
 }, [initialCount]);

 const handleCountChange = (delta) => {
  const newCount = Math.max(0, count + delta);
  setCount(newCount);
  onCountChange(pizza.id, newCount);
 };

 return (
  <Card style={{ width: "300px" }}>
   <Card.Img variant="top" src={pizza.img} />
   <Card.Body>
    <Card.Title className="title-pizza">{pizza.name}</Card.Title>
    <div className="separator"></div>
    <div className="mt-auto text-center">
     <p className="fs-5 fw-normal">Precio: ${pizza.price}</p>
     <div className="d-flex justify-content-around align-items-center">
      <Button variant="light" className="border border-3">
       Ver Más 👀
      </Button>
      <div className="d-flex align-items-center">
       <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => handleCountChange(-1)}
       >
        -
       </Button>
       <span className="mx-2">{count}</span>
       <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => handleCountChange(1)}
       >
        +
       </Button>
      </div>
     </div>
    </div>
   </Card.Body>
  </Card>
 );
}

export default PizzaCart;
