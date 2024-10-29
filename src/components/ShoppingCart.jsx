// src/components/ShoppingCart.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import bookImage from '../assets/book_example.webp'; // Reemplaza con la ruta de tu imagen

function ShoppingCart({ isOpen, toggleCart }) {
  const navigate = useNavigate();

  // Función para manejar la redirección al presionar "Proceder al Pago"
  const handleProceedToCheckout = () => {
    navigate('/shopcart');
    toggleCart(); // Opcional: cerrar el carrito después de navegar
  };

  if (!isOpen) return null; // Si el carrito no está abierto, no renderizar nada

  return (
    <div className="absolute right-0 top-10 bg-gray border border-gray-200 shadow-lg w-full sm:w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 sm:p-6">
      {/* Encabezado del carrito */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#195091]">Carrito de Compra</h2>
        <button onClick={toggleCart} className="text-[#195091] text-xl font-bold hover:text-blue-800">
          &times;
        </button>
      </div>

      <hr className="border-t border-primary mb-4" />

      {/* Lista de productos en el carrito */}
      <div className="flex mb-6">
        <img
          src={bookImage} // Reemplaza con la URL de la imagen del libro
          alt="Libro Matemática"
          className="w-auto h-28 object-cover mr-4"
        />
        
        {/* Información del producto */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-md font-semibold text-[#195091]">Libro Matemática</p>
            <p className="text-sm text-gray-600">Tipo: tapa dura</p>
          </div>

          {/* Contenedor del selector y botón de remover, alineados al final */}
          <div className="flex items-center mt-4 justify-between">
            <select className="border-2 border-primary px-3 py-2 text-primary bg-gray focus:outline-none w-32">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

            <button className="text-sm text-blue-600 hover:underline">Remover</button>
          </div>
        </div>
      </div>

      {/* Otro producto */}
      <div className="flex mb-6">
        <img
          src={bookImage} // Reemplaza con la URL de la imagen del libro
          alt="Libro Matemática"
          className="w-auto h-28 object-cover mr-4"
        />
        
        {/* Información del producto */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-md font-semibold text-[#195091]">Libro Matemática</p>
            <p className="text-sm text-gray-600">Tipo: tapa dura</p>
          </div>

          {/* Contenedor del selector y botón de remover, alineados al final */}
          <div className="flex items-center mt-4 justify-between">
            <select className="border-2 border-primary px-3 py-2 text-primary bg-gray focus:outline-none w-32">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="text-sm text-blue-600 hover:underline">Remover</button>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#195091] mb-4" />

      {/* Total y botón de proceder */}
      <div className="justify-between items-center mb-4">
        <p className="text-lg font-semibold text-primary mb-3">Total</p>
        <p className="text-sm text-primary">Calculo total al finalizar la compra</p>
      </div>
      
      <div className='flex justify-center'>
        <button
          onClick={handleProceedToCheckout}
          className="mt-3 p-14 w-auto bg-primary text-white font-bold py-3 rounded-md hover:bg-blue-800"
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
