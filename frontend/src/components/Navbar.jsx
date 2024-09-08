import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

const total = 25000;
const token = false;

const formatTotal = (amount) => amount.toLocaleString('es-ES');

const NavbarPizzeria = () => {
  return (
    <Navbar expand="lg" className="sticky-top navbar-dark bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Pide tu pizza 👉</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  variant="outline-light" to="/" className="me-2">🍕 Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link}  variant="outline-light" to="/profile" className="me-2">🔓 Profile</Nav.Link>
                <Nav.Link as={Link}  variant="outline-light" to="/logout" className="me-2">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} variant="outline-light" to="/login" className="me-2">🔐 Login</Nav.Link>
                <Nav.Link as={Link} variant="outline-light" to="/register" className="me-2">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-lg-auto">
            <Nav.Link as={Link} className="w-lg-auto mt-2 mt-lg-0" variant="outline-info" to="/cart">
              🛒 Total: ${formatTotal(total)}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPizzeria;
