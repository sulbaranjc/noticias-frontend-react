// BloqueNoticiasEstaticas.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import imagen01 from '../assets/noticia_Imagen_01.jpg';
import imagen02 from '../assets/noticia_Imagen_02.jpg';
import imagen03 from '../assets/noticia_Imagen_03.jpg';


const BloqueNoticiasEstaticas = () => {
  // Ejemplo de noticias estáticas
  const noticiasEstaticas = [
    { imagen : imagen01,
      titulo: 'Descubren un virus desconocido hasta ahora en una lechuza muerta en Extremadura', 
      descripcion: 'Investigadores encuentran un nuevo virus, al que han denominado BoBV-1, en un ave muerta: similar a otro patógeno que afecta a los canarios, no parece afectar al ser humano' },
    { imagen : imagen02,
      titulo: 'IA y abogacía: trabajo híbrido y conversacional permanente con algoritmos jurídicos', 
      descripcion: 'Las tendencias para el sector es que se migre de un acto creativo, individual y relativamente lento, dominado por la odiosa mecanografía, a la escritura híbrida, conversacional y permanente, con avanzados algoritmos del lenguaje' },
    { imagen : imagen03,
      titulo: 'Cómo solicitar el voto por correo para las elecciones de Galicia 2024', descripcion: 'Para pedir el voto por correo deben tenerse en cuenta una serie de plazos. Este es el procedimiento que deberás seguir' },
    { titulo: 'Noticia 4', descripcion: 'Descripción de la noticia 4...' },
    // Agrega más noticias según sea necesario
  ];

  return (
    <div>
      {noticiasEstaticas.map((noticia, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Img variant="top" src={noticia.imagen} style={{ width: '100px', height: '100px' }} />
            <Card.Title>{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BloqueNoticiasEstaticas;
