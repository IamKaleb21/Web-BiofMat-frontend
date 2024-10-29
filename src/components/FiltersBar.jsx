/* eslint-disable no-unused-vars */
import { useState } from 'react';

function FiltersBar() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedNews, setSelectedNews] = useState('');
  const [selectedOffers, setSelectedOffers] = useState('');

  return (
    <div className="flex justify-center">
      {/* Contenedor de los filtros */}
      <div className="flex w-11/12">
        {/* Filtro de Categoría */}
        <div className="flex items-center border border-primary px-4 py-2 cursor-pointer hover:border-primary-700 flex-grow">
          <span className="mr-2 font-semibold text-primary">Categoría</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path
              d="M10 1L5.5 4.21701L1 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Filtro de Novedades */}
        <div className="flex items-center border border-primary px-4 py-2 cursor-pointer hover:border-primary-700 flex-grow">
          <span className="mr-2 font-semibold text-primary">Novedades</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path
              d="M10 1L5.5 4.21701L1 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Filtro de Ofertas */}
        <div className="flex items-center border border-primary px-4 py-2 cursor-pointer hover:border-primary-700 flex-grow">
          <span className="mr-2 font-semibold text-primary">Ofertas</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path
              d="M10 1L5.5 4.21701L1 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FiltersBar;
