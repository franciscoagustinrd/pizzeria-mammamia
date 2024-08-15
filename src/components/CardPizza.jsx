import { Container, Card, Button } from 'react-bootstrap';
import "./CardPizza.css";

function CardPizza(props) {
 return (
<Container className="p-2">
  <Card  style={{ width: "300px" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className="title-pizza">{props.name}</Card.Title>
      <div className="separator"></div>
      <Card.Text className="mb-3 ingredients-desc">
        <span className="fs-5 fw-light">Ingredientes: </span>
        <p className="fs-6">🍕{props.ingredients.join(", ")}</p>
        
      </Card.Text>
			<div className="separator"></div>
      <div className="mt-auto text-center">
        <p className="fs-5 fw-normal">Precio: ${props.price}</p>
        <div className="d-flex justify-content-around">
          <Button variant="light" className="border border-3">
            Ver Más 👀
          </Button>
          <Button variant="dark" className="border border-3">
            Añadir 🛒
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
</Container>
 );
}

export default CardPizza;
