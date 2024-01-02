import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark"> {/* Modo oscuro aquí */}
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand> {/* Asegúrate de poner tu logo o texto aquí */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sucesos</Nav.Link>
            <Nav.Link href="#link">Politica</Nav.Link>
            <NavDropdown title="Deportes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Futbol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Baloncesto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tenis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Otros deportes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
