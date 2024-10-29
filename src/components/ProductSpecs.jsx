// src/components/ProductSpecs.jsx

function ProductSpecs({ details }) {
  return (
    <div className="mt-8 space-y-2">
      <details className="pt-2" open>
        <summary className="cursor-pointer font-semibold text-primary active:default:">Detalles</summary>
        <div className="text-sm text-primary pl-4 mt-2">
          <p>- ISBN: {details.isbn}</p>
          <p>- Editorial: {details.publisher}</p>
          <p>- Edición: {details.edition}</p>
          <p>- Páginas: {details.pages}</p>
          <p>- Idioma: {details.language}</p>
          <p>- Fecha de publicación: {details.releaseDate}</p>
        </div>
      </details>
    </div>
  );
}

export default ProductSpecs;
