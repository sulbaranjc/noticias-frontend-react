import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="ligth" className="bg-ligth"> {/* Modo oscuro claro */}
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centra los elementos dentro de la barra de navegación */}
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sucesos">Sucesos</Nav.Link>
            <Nav.Link href="#politica">Politica</Nav.Link>
            <NavDropdown title="Deportes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#futbol">Futbol</NavDropdown.Item>
              <NavDropdown.Item href="#baloncesto">
                Baloncesto
              </NavDropdown.Item>
              <NavDropdown.Item href="#tenis">Tenis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#otros-deportes">
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
