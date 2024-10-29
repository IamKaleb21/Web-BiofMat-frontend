// src/components/ProductInfo.jsx
import FormatOptions from './FormatOptions';
import ProductSpecs from './ProductSpecs';

function ProductInfo({ title, price, author, description, formatOptions, details }) {
  return (
    <div className="space-y-6">
      {/* Título y Precio */}
      <h1 className="text-3xl font-bold text-primary uppercase">{title}</h1>
      <hr className="border-t-2 border-primary my-2" />
      <p className="text-2xl font-semibold text-primary">S/.{price}</p>
      <p className="text-md text-primary uppercase">(Autor: {author})</p>
      <hr className="border-t-2 border-primary my-2" />

      {/* Opciones de Formato */}
      <div className="mt-4">
        <h3 className="font-semibold text-primary mb-2">FORMATO:</h3>
        <FormatOptions options={formatOptions} />
      </div>
      <hr className="border-t-2 border-primary my-2" />

      {/* Descripción */}
      <p className="text-primary mt-4">{description}</p>
      <hr className="border-t-2 border-primary my-2" />

      {/* Selección de Cantidad y Botón Agregar */}
      <div className="flex items-center space-x-4 mt-6">
        <div className="flex items-center border border-primary">
          <button className="px-4 py-2 text-primary font-bold">-</button>
          <span className="px-4 py-2 font-semibold">1</span>
          <button className="px-4 py-2 text-primary font-bold">+</button>
        </div>
        <button className="border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-colors">
          AGREGAR AL CARRITO
        </button>
      </div>
      <hr className="border-t-2 border-primary my-2" />

      {/* Especificaciones del Producto */}
      <ProductSpecs details={details} />
    </div>
  );
}

export default ProductInfo;
