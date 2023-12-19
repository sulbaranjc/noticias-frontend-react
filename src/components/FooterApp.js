// FooterApp.jsx
import React from 'react';

const FooterApp = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tu Compañía. Todos los derechos reservados.</p>
        <p>Contacto: info@tucompania.com</p>
        <div className="social-links">
          {/* Enlaces a redes sociales, puedes cambiarlos o agregar más */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
