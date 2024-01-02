import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import bannerNoticias from '../Banner-noticias.jpg';

function Noticia() {
  const [noticia, setNoticia] = useState({ titulo: '', desarrollo: '' });
  const [noticiaId, setNoticiaId] = useState(0);
  const [currentEndpointIndex, setCurrentEndpointIndex] = useState(0);

  const endpoints = useMemo(() => [
    'http://127.0.0.1:8000/api/noticias/siguiente/',
    'http://127.0.0.1:8010/api/noticias/siguiente/'
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoints[currentEndpointIndex]}${noticiaId}`);
        setNoticia(response.data);
        setNoticiaId(response.data.id);
      } catch (error) {
        console.log(`Error en el endpoint ${endpoints[currentEndpointIndex]}`);
        if (currentEndpointIndex === 0) {
          setCurrentEndpointIndex(1); // Cambia al segundo endpoint si falla el primero
        } else {
          setCurrentEndpointIndex(0); // Cambia al primer endpoint si falla el segundo
        }
      }
    };

    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [noticiaId, currentEndpointIndex, endpoints]); // Incluimos endpoints como dependencia

  return (
    <div className="">
      <div className="card" style={{ width: '350px', height:'680px' }}>
        <img src={bannerNoticias} className="card-img-top" alt="Avances de noticias" />
        <div className="card-body">
          <h5 className="card-title">{noticia.titulo}</h5>
          <p className="card-text">{noticia.desarrollo}</p>
        </div>
      </div>
    </div>
  );
}

export default Noticia;
