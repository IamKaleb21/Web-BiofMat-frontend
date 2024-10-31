// src/components/BlogSection.jsx
import { Link } from 'react-router-dom';

function BlogSection({ blogs }) {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <h2 className="text-4xl font-extrabold text-primary mb-6">Blog Educativo</h2>
                <p className="text-gray-600 mb-10">Explora nuestros artículos y recursos educativos.</p>

                {/* Contenedor de blogs en formato de cuadrícula */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                            <Link to={`/blog/${blog.id}`} className="group">
                                {/* Imagen destacada del blog */}
                                <div className="relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                {/* Contenido del blog */}
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-primary mb-2">{blog.title}</h3>
                                    <p className="text-sm text-gray-500">{blog.subtitle}</p>
                                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">{blog.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
