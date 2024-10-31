// src/pages/BlogPage.jsx
import Footer from "../components/Footer"
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import DocumentHead from '../components/DocumentHead'
import BlogSection from "../components/BlogSection";

function Home() {
    const blogs = [
        {
            id: 1,
            image: 'https://via.placeholder.com/600x400',
            title: 'Educación y Pedagogía',
            subtitle: 'Métodos de aprendizaje',
            description: 'Exploración de diferentes enfoques pedagógicos, como el aprendizaje basado en proyectos o la enseñanza de STEM.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/600x400',
            title: 'El Infinito Potencial del Conocimiento',
            subtitle: 'Artículos de opinión',
            description: 'Análisis profundos sobre teorías modernas y su aplicación en la educación moderna.',
        },
        // Más artículos...
    ];
    
  return (
    <>
    <DocumentHead title="BiofMat - Blog" />
    <div>
      <Header />
      <HeroSection />
      <div>
            {/* Otras secciones */}
            <BlogSection blogs={blogs} />
        </div>
      
      <Footer />
    </div>
    </>
  );
}

export default Home;
