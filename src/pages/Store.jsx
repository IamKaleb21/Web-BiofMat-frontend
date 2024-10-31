// src/pages/Store.jsx
import Footer from "../components/Footer"
import Header from '../components/Header'
import DocumentHead from '../components/DocumentHead'
import { useEffect, useState } from 'react';
import BooksGrid from '../components/BooksGrid';
import bookImage from '../assets/book_example.webp'; // Reemplaza con la ruta de tu imagen
import TopBar from "../components/TopBar";

function Store() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      // Aquí podrías hacer una llamada a una API para obtener los libros
      // Simularemos datos para el ejemplo
      setBooks([
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        { id: 1, title: "Algebra I - Problemas Resueltos", imageUrl: bookImage, price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        // Más libros...
      ]);
    }, []);

  return (
    <>
    <DocumentHead title="BiofMat - Store" />
    <div>
      <Header />

        <div>
        <TopBar></TopBar>
        <BooksGrid books={books} />
        </div>

      <Footer />
    </div>
    </>
  );
}

export default Store;
