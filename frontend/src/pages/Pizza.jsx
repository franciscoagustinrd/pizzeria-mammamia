import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza data", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>Cargando información de la pizza...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center footer-fix
    ">
    <Container className="m-3">
    <Row className="border rounded align-items-center">
      <Col>
        <Image className="object-fit-lg-contain" src={pizza.img} alt={pizza.name} fluid />
      </Col>
      <Col>
        <h1 className="title-pizza">{pizza.name}</h1>
        <p className="fw-light fs-6">{pizza.desc}</p>
        <ul className="fw-light"
          style={{
            listStyleType: "none",
          }}
        >
          {pizza.ingredients.map((ingredient, index) => {
            const isLast = index === pizza.ingredients.length - 1;
  
            return (
              <li key={index}> 🍕 {' '}
                {ingredient.trim().charAt(0).toUpperCase() + ingredient.trim().slice(1)}
                {isLast ? "" : " "}
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-around  align-items-center">
          <p className="fs-4 fw-normal">Precio: ${pizza.price}</p>
          <Button             variant="dark"
            size="sm"
          >
            Añadir  🛒
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
  );
};

export default Pizza;
