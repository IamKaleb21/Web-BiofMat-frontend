// src/components/ProductGallery.jsx

function ProductGallery({ mainImage, thumbnails }) {
  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <img src={mainImage} alt="Producto" className="w-full h-auto object-cover border border-gray-200" />
      
      {/* Miniaturas */}
      <div className="grid grid-cols-3 gap-2">
        {thumbnails.map((thumb, index) => (
          <img key={index} src={thumb} alt={`Miniatura ${index + 1}`} className="w-full h-auto object-cover cursor-pointer border border-gray-200" />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
