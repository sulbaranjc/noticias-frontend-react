import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bannerNoticias from '../Banner-noticias.jpg';

function Noticia() {
  const [noticia, setNoticia] = useState({ titulo: '', desarrollo: '' });
  const [noticiaId, setNoticiaId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`http://127.0.0.1:8000/api/noticias/siguiente/${noticiaId}`)
        .then(response => {
          setNoticia(response.data);
          setNoticiaId(response.data.id);
        })
        .catch(error => console.log(error));
    }, 5000);

    return () => clearInterval(interval);
  }, [noticiaId]);

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
