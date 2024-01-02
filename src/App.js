import './App.css';
import InfiniteScrollBanner from './components/InfiniteScrollBanner';
import Noticia from './components/Noticia';
import Titulo from './components/Titulo';
import NavbarApp from './components/NavbarApp.jsx';
import FooterApp from './components/FooterApp'; // Asegúrate de importar FooterApp
import BloqueNoticiasEstaticas from './components/BloqueNoticiasEstaticas';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Titulo /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={12}><NavbarApp/></Col>
      </Row>
      <Row>
        <Col md={4}><Noticia /></Col>
        <Col md={8}>
          <Row className="justify-content-md-center">
            <Col><InfiniteScrollBanner/></Col>
          </Row>      
          <Row>
          <BloqueNoticiasEstaticas />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col><FooterApp/></Col>
      </Row>
    </Container>
  );
}

export default App;
