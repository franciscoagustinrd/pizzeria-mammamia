import React, { useState, useEffect, useContext } from "react"; 
import { CartContext } from '../context/CartContext';  
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Pizza.css";
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchPizza();
    }
  }, [id]);

  if (error) {
    return <p>Error al cargar la pizza: {error}</p>;
  }

  if (!pizza) {
    return <p>Cargando información de la pizza...</p>;
  }


  const handleAddToCart = () => {
    addToCart(pizza); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center footer-fix">
      <Container className="m-3">
        <Row className="border rounded align-items-center">
          <Col>
            <Image className="object-fit-lg-contain" src={pizza.img} alt={pizza.name} fluid />
          </Col>
          <Col>
            <h1 className="title-pizza">{pizza.name}</h1>
            <h5>ID: {id}</h5>
            <p className="fw-light fs-6">{pizza.desc}</p>
            <ul className="fw-light" style={{ listStyleType: "none" }}>
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
            <div className="d-flex justify-content-around align-items-center">
              <p className="fs-4 fw-normal">Precio: ${pizza.price}</p>
              <Button variant="dark" size="sm" onClick={handleAddToCart}> 
                Añadir 🛒
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pizza;
