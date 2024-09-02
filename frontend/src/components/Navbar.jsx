import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const total = 25000;
const token = false;

const formatTotal = (amount) => amount.toLocaleString('es-ES');

const NavbarPizzeria = () => {
  return (
    <Navbar expand="lg" className="sticky-top navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">Pide tu pizza 👉</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light" href="#" className="me-2">🍕 Home</Button>
            {token ? (
              <>
                <Button variant="outline-light" href="#" className="me-2">🔓 Profile</Button>
                <Button variant="outline-light" href="#" className="me-2">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" href="#" className="me-2">🔐 Login</Button>
                <Button variant="outline-light" href="#" className="me-2">🔐 Register</Button>
              </>
            )}
          </Nav>
          <Nav className="ms-lg-auto">
            <Button className="w-lg-auto mt-2 mt-lg-0" variant="outline-info" href="#link">
              🛒 Total: ${formatTotal(total)}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPizzeria;
