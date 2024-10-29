import { useState } from 'react';
import ShoppingCart from './ShoppingCart';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative flex items-center border border-primary px-6 py-2 text-primary">
      {/* Contenedor para separar búsqueda y carrito */}
      <div className="flex items-center w-full justify-between">
        {/* Barra de búsqueda */}
        <div className="flex items-center">
          {/* Icono de búsqueda */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10.3333 10.3333L15 15M6.44444 11.8889C3.43756 11.8889 1 9.45133 1 6.44444C1 3.43756 3.43756 1 6.44444 1C9.45133 1 11.8889 3.43756 11.8889 6.44444C11.8889 9.45133 9.45133 11.8889 6.44444 11.8889Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Input de búsqueda */}
          <input
            type="text"
            placeholder="Buscar..."
            className="border-none outline-none bg-transparent text-primary placeholder-primary w-24 sm:w-64 ml-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Botón de carrito completamente a la derecha */}
        <button onClick={toggleCart} className="text-primary hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4h-2l-1 2h-4v2h2l3.6 7.59-1.35 2.44c-.15.28-.25.61-.25.97 0 1.11.89 2 2 2h12v-2h-11.42c-.06 0-.11-.04-.13-.09l.03-.08.9-1.63h7.82c.75 0 1.41-.41 1.75-1.04l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-14.98l-.64-1.36-.03-.04zm10 15c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
          </svg>
        </button>
      </div>

      {/* Carrito de compra (mostrar/ocultar) */}
      <ShoppingCart isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default SearchBar;
