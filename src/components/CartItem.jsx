// src/components/CartItem.jsx
import PropTypes from 'prop-types';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary py-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Imagen e Información */}
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-24 h-24 md:w-32 md:h-32 object-cover"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-primary">{item.title}</h4>
          <p className="text-sm text-primary">Tipo: {item.type}</p>
        </div>
      </div>

      {/* Selector de Cantidad, Precio y Botón de Eliminar */}
      <div className="flex items-center space-x-4 w-full md:w-3/5 justify-between md:pr-12">
        <select
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, e.target.value)}
          className="border border-primary px-10 py-1 text-primary bg-white"
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
        <span className="font-bold text-primary md:px-30">S/. {item.price}</span>
        <button onClick={() => onRemove(item.id)} className="text-primary font-bold text-xl">
          &times;
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
