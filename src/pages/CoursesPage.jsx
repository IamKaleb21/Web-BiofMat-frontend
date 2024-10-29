// src/pages/CoursesPage.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersSidebar from '../components/FiltersSidebar';
import CoursesGrid from '../components/CoursesGrid';

function CoursesPage() {
  // Datos placeholder para los cursos
  const courses = [
    { id: '1', title: 'Propiedades de los números enteros', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Combinatoria, gráficos y lógica', price: 20.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Derivadas e integrales', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Métodos numéricos', price: 18.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: '5', title: 'Solución de ecuaciones diferenciales', price: 25.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: '6', title: 'Álgebra lineal', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Todos Nuestros Cursos</h2>
        <div className="flex flex-col md:flex-row">
          {/* Filtros */}
          <FiltersSidebar />
          
          {/* Lista de Cursos */}
          <div className="w-full md:w-3/4 p-4">
            <CoursesGrid courses={courses} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoursesPage;
