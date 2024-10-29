// src/pages/ProductPage.jsx
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import SimilarProducts from '../components/SimilarProducts';
import TopBar from '../components/TopBar';

function ProductPage() {
    const { id } = useParams();

    // Datos placeholder para el producto
    const placeholderProduct = {
        id,
        title: "Teoría de Números y Estructuras Matemáticas",
        price: 35.99,
        author: "Dr. Kevin Zavaleta",
        description: "Obra esencial para aquellos que desean comprender los principios fundamentales de la teoría de números. Desde conceptos básicos hasta aplicaciones avanzadas, la obra profundiza en temas como la aritmética modular, teoremas de Fermat y Euler, funciones multiplicativas, y mucho más.",
        formatOptions: ["Formato Físico", "Formato eBook"],
        details: {
            isbn: "978-3-16-148410-0",
            publisher: "Editorial Practikus",
            edition: "2da Edición, Revisada y Ampliada",
            pages: 450,
            language: "Español",
            releaseDate: "Septiembre 2024",
        },
        mainImage: "https://via.placeholder.com/400x400",
        thumbnails: [
            "https://via.placeholder.com/100x100",
            "https://via.placeholder.com/100x100",
            "https://via.placeholder.com/100x100"
        ],
        similarProducts: [
            { id: "2", title: "Álgebra I - Problemas Resueltos", price: 20, imageUrl: "https://via.placeholder.com/150", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra"  },
            { id: "3", title: "Geometría Básica", price: 18, imageUrl: "https://via.placeholder.com/150", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra"  },
            { id: "4", title: "Algebra I - Problemas Resueltos", imageUrl: "https://via.placeholder.com/150", price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        ]
    };

    return (
        <>
            <Header />
            <TopBar />
            <div className="mx-auto border-primary border w-11/12">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Galería de Imágenes */}
                    <div className='border-b md:border-r md:border-b-0 py-12 px-4 border-primary'>
                        <ProductGallery mainImage={placeholderProduct.mainImage} thumbnails={placeholderProduct.thumbnails}/>
                    </div>

                    {/* Información del Producto */}
                    <div className='py-12 px-4 md:px-16'>
                        <ProductInfo
                            title={placeholderProduct.title}
                            price={placeholderProduct.price}
                            author={placeholderProduct.author}
                            description={placeholderProduct.description}
                            formatOptions={placeholderProduct.formatOptions}
                            details={placeholderProduct.details}
                            />
                    </div>
                </div>
            </div>
            {/* Productos Similares */}
            <div>
                <SimilarProducts products={placeholderProduct.similarProducts} title={'Similares'} />
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;
