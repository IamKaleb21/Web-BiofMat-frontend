// src/pages/CoursePage.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocumentHead from '../components/DocumentHead';
import CourseHeader from '../components/CourseHeader';
import CourseAbout from '../components/CourseAbout';
import CourseModules from '../components/CourseModules';
import SectionToggle from '../components/SectionToggle';
import SearchBar from '../components/SearchBar';

function CoursePage() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('about');

  // Datos de ejemplo para el curso
  const placeholderCourse = {
    id,
    title: "Ecuaciones Diferenciales",
    instructor: "Prof. Juan Martínez",
    description: "¡Bienvenidos al curso virtual de Ecuaciones Diferenciales! En este curso, exploraremos una de las herramientas matemáticas más poderosas para modelar y entender fenómenos que varían en el tiempo y el espacio, aplicadas a áreas como la física, la biología, la economía y más. Aprenderemos a resolver ecuaciones que describen cómo los sistemas evolucionan, usando tanto métodos analíticos como aproximaciones numéricas. A lo largo del curso, abordaremos temas clave como: ¡Prepárate para descubrir cómo las matemáticas pueden describir y predecir el comportamiento de los sistemas dinámicos del mundo real!",
    level: "Básico",
    students: 14,
    language: "Español",
    duration: "3 horas",
    instructorDescription: "Soy el profesor Juan Martínez, experto en ecuaciones diferenciales...",
    rating: 4.5,
    modules: [
      {
        title: "Módulo 1: Ecuaciones Diferenciales",
        classes: ["Clase 1: Definición y clasificación", "Clase 2: Soluciones generales y particulares"]
      },
      {
        title: "Módulo 3: Ecuaciones Diferenciales",
        classes: ["Clase 1: Definición y clasificación", "Clase 2: Soluciones generales y particulares"]
      },
      {
        title: "Módulo 3: Ecuaciones Diferenciales",
        classes: ["Clase 1: Definición y clasificación", "Clase 2: Soluciones generales y particulares"]
      },
      {
        title: "Módulo 4: Ecuaciones Diferenciales",
        classes: ["Clase 1: Definición y clasificación", "Clase 2: Soluciones generales y particulares"]
      },
      // Agrega más módulos aquí...
    ],
    mainImage: "https://via.placeholder.com/600x400",
  };

  return (
    <>
      <DocumentHead title={`BiofMat - ${placeholderCourse.title}`} />
      <Header />
      <SearchBar />
      <div className="container mx-auto px-4 py-8">
        
        {/* Encabezado del curso */}
        <CourseHeader course={placeholderCourse} />

        {/* Controles de secciones */}
        <SectionToggle activeSection={activeSection} onToggle={setActiveSection} />

        {/* Contenido de las secciones */}
        {activeSection === 'about' ? (
          <CourseAbout course={placeholderCourse} />
        ) : (
          <CourseModules modules={placeholderCourse.modules} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
