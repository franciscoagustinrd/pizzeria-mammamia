import React, { useContext, useState } from "react";
import PizzaCart from "../components/PizzaCart.jsx";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap"; 
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
import { formatPrice } from "../utils/utils";

function Cart() {
    const { cart, updateCart, removeFromCart, totalPrice } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false); 
    const [message, setMessage] = useState(null); 

    const handleCountChange = (pizza, delta) => {
        const newCount = pizza.quantity + delta;
        updateCart(pizza, newCount); 
    };

    const handlePayment = async () => {
        if (!token) {
            alert("Debes iniciar sesión para realizar el pago."); 
            return;
        }

        if (cart.length === 0) {
            setMessage("😔 No has agregado ninguna pizza al carro"); 
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify({ cart }), 
            });

            if (!response.ok) {
                const errorResult = await response.json(); 
                throw new Error(errorResult.message || 'Error al procesar el pago');
            }

            const result = await response.json();
            setMessage("¡Listo! Ya pediste tus pizzas, te mantendremos al tanto del estado de tu pedido.");
            cart.forEach(pizza => removeFromCart(pizza.id)); 

            console.log("Compra realizada con éxito:", result);
        } catch (error) {
            console.error(error);
            setMessage("Hubo un error al procesar tu pago. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
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

                    {!token ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    Debes loguearte para pagar
                                </Tooltip>
                            }
                        >
                            <span>
                                <Button
                                    variant="danger"
                                    className="mt-2 mb-3"
                                    size="lg"
                                    onClick={handlePayment}
                                    disabled={!token || loading}
                                >
                                    {loading ? "Procesando..." : "Pagar"}
                                </Button>
                            </span>
                        </OverlayTrigger>
                    ) : (
                        <Button
                            variant="danger"
                            className="mt-2 mb-3"
                            size="lg"
                            onClick={handlePayment}
                            disabled={loading}
                        >
                            {loading ? "Procesando..." : "Pagar"}
                        </Button>
                    )}

                    {message && <p>{message}</p>} {/* Se muestra el mensaje de éxito o error */}
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
