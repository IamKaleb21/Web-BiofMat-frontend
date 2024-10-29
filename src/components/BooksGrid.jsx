/* eslint-disable react/prop-types */
// src/components/BooksGrid.jsx
import BookCard from './BookCard';

function BooksGrid({ books }) {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BooksGrid;
