/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const DocumentHead = ({ title, faviconUrl }) => {
  useEffect(() => {
    // Cambiar el título de la página
    document.title = title;

    // Cambiar el favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
    
  }, [title, faviconUrl]);  // Dependencias para que el useEffect se ejecute cuando cambien

  return null;  // No renderiza nada
};

export default DocumentHead;
