// src/components/SimilarProducts.jsx
import BooksGrid from './BooksGrid';

function SimilarProducts({ products, title }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-primary mb-4 uppercase text-center">{title}</h2>
      <BooksGrid books={products} />
    </div>
  );
}

export default SimilarProducts;
