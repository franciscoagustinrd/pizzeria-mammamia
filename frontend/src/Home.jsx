import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pizza from "./components/Pizza";
import PizzaCart from './components/PizzaCart';

function Home() {
  const [pizzaList, setPizzaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/");
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        setPizzaList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <Container className="my-4" style={{ maxWidth: "1200px" }}>
        <Row className="justify-content-center py-4 px-2">
          <Col xs={12} className="text-center">
            <h2>Cargando pizzas...</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4" style={{ maxWidth: "1200px" }}>
        <Row className="justify-content-center py-4 px-2">
          <Col xs={12} className="text-center">
            <h2>Error al cargar pizzas: {error}</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  if (pizzaList.length === 0) {
    return (
      <Container className="my-4" style={{ maxWidth: "1200px" }}>
        <Row className="justify-content-center py-4 px-2">
          <Col xs={12} className="text-center">
            <h2>No se encontraron pizzas.</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-4" style={{ maxWidth: "1200px" }}>
      <Row className="justify-content-center py-4 px-2">
        {pizzaList.map((pizza) => (
          <Col key={pizza.id} xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4">
            <PizzaCart pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;