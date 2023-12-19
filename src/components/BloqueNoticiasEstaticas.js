// BloqueNoticiasEstaticas.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const BloqueNoticiasEstaticas = () => {
  // Ejemplo de noticias estáticas
  const noticiasEstaticas = [
    { titulo: 'Noticia 1', descripcion: 'Descripción de la noticia 1...' },
    { titulo: 'Noticia 2', descripcion: 'Descripción de la noticia 2...' },
    { titulo: 'Noticia 3', descripcion: 'Descripción de la noticia 3...' },
    { titulo: 'Noticia 4', descripcion: 'Descripción de la noticia 4...' },
    { titulo: 'Noticia 5', descripcion: 'Descripción de la noticia 5...' },
    { titulo: 'Noticia 6', descripcion: 'Descripción de la noticia 6...' },
    // Agrega más noticias según sea necesario
  ];

  return (
    <div>
      {noticiasEstaticas.map((noticia, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BloqueNoticiasEstaticas;
