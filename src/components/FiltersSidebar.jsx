// src/components/FiltersSidebar.jsx
function FiltersSidebar() {
    return (
      <aside className="w-full md:w-1/4 p-4 border-r border-primary">
        <h3 className="font-bold text-primary mb-4">Filtros</h3>
  
        <details open className="mb-4">
          <summary className="font-semibold text-primary cursor-pointer">Categorías</summary>
          <ul className="mt-2 text-sm text-primary space-y-1">
            <li>Cursos Online</li>
            <li>Cursos Nuevos</li>
            <li>Cursos Gratis</li>
          </ul>
        </details>
  
        <details className="mb-4">
          <summary className="font-semibold text-primary cursor-pointer">Nivel Educativo</summary>
          <ul className="mt-2 text-sm text-primary space-y-1">
            <li>Primaria</li>
            <li>Secundaria</li>
            <li>Pre Universitario</li>
          </ul>
        </details>
  
        <details className="mb-4">
          <summary className="font-semibold text-primary cursor-pointer">Software</summary>
          <ul className="mt-2 text-sm text-primary space-y-1">
            <li>MATLAB</li>
            <li>Simuladores de Biología</li>
          </ul>
        </details>
  
        <details className="mb-4">
          <summary className="font-semibold text-primary cursor-pointer">Duración</summary>
          <ul className="mt-2 text-sm text-primary space-y-1">
            <li>Menos de 5 horas</li>
            <li>Entre 5 y 10 horas</li>
            <li>Más de 10 horas</li>
          </ul>
        </details>
      </aside>
    );
  }
  
  export default FiltersSidebar;
  