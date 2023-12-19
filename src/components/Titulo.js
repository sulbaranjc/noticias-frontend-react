import "./HeadApp.css"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imagenLogo from '../logoNoticia.png';

function Titulo() {
  return (
     <Container className=" " 
      fluid={true} >
      <Navbar className='mx-0 px-0' >
        <Container  className='mx-1 px-0'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={imagenLogo}
              width="10%"
              height="10%"
              className="d-inline-block "
            />{' '}
            <h1 className=''>Noticas Dinamicas traidas desde el servidor</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </Container>
  );
}

export default Titulo;


