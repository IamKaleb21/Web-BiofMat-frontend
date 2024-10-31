// src/components/BookCard.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function BookCard({ book }) {
  const navigate = useNavigate();

  // Función para truncar el título si es necesario
  const truncateText = (title, length) => {
    return title.length > length ? `${title.slice(0, length)}...` : title;
  };

  // Función para manejar la navegación al producto
  const handleViewProduct = () => {
    navigate(`/product/${book.id}`);
  };

  return (
    <div className="mx-10 my-6">
      <div className="bg-gray overflow-hidden px-4 py-7 mb-5">
        {/* Imagen del libro */}
        <img
          className="w-full h-64 object-cover"
          src={book.imageUrl}
          alt={book.title}
        />
      </div>

      <div>
        {/* Título y precio */}
        <div className="flex justify-between items-center mb-2">
          <h5 className="font-semibold text-md text-primary">
            {truncateText(book.title, 20)}
          </h5>
          <span className="text-md font-bold text-primary">
            S/. {book.price}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-sm text-primary mb-1">
          {truncateText(book.title, 40)}
        </p>

        {/* Categorías */}
        <p className="text-sm text-primary mb-4">
          {book.category} <br /> {book.subject}
        </p>

        {/* Botón de Ver Producto */}
        <button
          onClick={handleViewProduct}
          className="border-2 border-primary text-primary px-4 py-2 font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Ver producto
        </button>
      </div>
    </div>
  );
}

// Validación de los props
BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired, // ID es necesario para la navegación
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
