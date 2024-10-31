// src/components/BlogPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import Footer from '../components/Footer';

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Datos simulados de blogs
        const blogs = [
            {
                id: '1',
                image: 'https://via.placeholder.com/600x400',
                date: '3/10/2024',
                title: 'Educación y Pedagogía: La Clave para un Aprendizaje Efectivo',
                subtitle: 'La educación es la herramienta más poderosa para cambiar el mundo',
                description: 'La educación es la herramienta más poderosa para cambiar el mundo y en Biofmat entendemos que...',
                content: `
                    <h2>¿Qué es la Pedagogía y por qué es importante?</h2>
                    La pedagogía es el arte y la ciencia de la enseñanza...

                    <h2>La Educación en el Siglo XXI: Innovación y Tecnología</h2>
                    La educación en el contexto moderno...

                    <h2>La Personalización del Aprendizaje</h2>
                    Un aspecto clave de nuestra metodología en Biofmat es la personalización...

                    <h2>Conclusión</h2>
                    La educación en matemáticas y biología no tiene que ser intimidante ni aburrida...
                `,
                extraImages: [
                    'https://via.placeholder.com/600x400',
                    'https://via.placeholder.com/600x400'
                ]
            },
            // Más blogs...
        ];

        // Buscar el blog correspondiente al ID
        const selectedBlog = blogs.find(blog => blog.id === id);
        setBlog(selectedBlog);
    }, [id]);

    if (!blog) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <Header />
            <section className="container mx-auto px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    {/* Fecha */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="bg-primary text-white font-bold py-2 px-4 rounded-md text-center">
                            <p className="text-lg">{blog.date.split('/')[0]}</p>
                            <p className="text-lg">{blog.date.split('/')[1]}</p>
                        </div>
                        <h1 className="text-4xl font-extrabold text-primary">{blog.title}</h1>
                    </div>

                    {/* Subtítulo */}
                    <p className="text-lg text-gray-600 italic mb-8">{blog.subtitle}</p>

                    {/* Imagen Principal */}
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-80 object-cover mb-8 shadow-lg"
                    />

                    {/* Descripción breve */}
                    <p className="text-gray-700 leading-relaxed mb-8">{blog.description}</p>

                    {/* Contenido */}
                    <div className="text-gray-700 leading-relaxed space-y-6">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />

                        {/* Imágenes adicionales */}
                        {blog.extraImages && blog.extraImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Imagen adicional ${index + 1}`}
                                className="w-full h-80 object-cover mb-8 shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogPage;
