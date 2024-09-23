import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

function PizzaCart({ pizza }) {
  const { addToCart, updateCart, cart } = useContext(CartContext);
  const cartItem = cart.find((item) => item.id === pizza.id);
  const count = cartItem ? cartItem.quantity : 0;

  const handleCountChange = (delta) => {
    const newCount = Math.max(0, count + delta);
    if (newCount === 0) {
      updateCart(pizza, newCount); // Si es 0, eliminamos del carrito
    } else {
      updateCart(pizza, newCount); // Actualizamos la cantidad
    }
  };

  return (
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title className="title-pizza">{pizza.name}</Card.Title>
        <div className="separator"></div>
        <Card.Text>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyleType: "none",
              columnGap: "5px",
              rowGap: "0px",
              padding: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {pizza.ingredients.map((ingredient, index) => {
              const isLast = index === pizza.ingredients.length - 1;
              const isSecondLast = index === pizza.ingredients.length - 2;

              return (
                <li key={index}>
                  {ingredient.trim()}
                  {isLast ? "." : isSecondLast ? " y" : ","}
                </li>
              );
            })}
          </ul>
        </Card.Text>

        <div className="mt-auto text-center">
          <p className="fs-5 fw-normal">Precio: ${pizza.price}</p>
          <div className="d-flex justify-content-around align-items-center">
            <Link className="btn btn-danger" to={`/pizza/${pizza.id}`}>
              Ver Más 👀
            </Link>

            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handleCountChange(-1)}
                disabled={count <= 0}
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
