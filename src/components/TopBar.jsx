import SearchBar from '../components/SearchBar';
import FiltersBar from '../components/FiltersBar';

function TopBar() {
  return (
    <div className="flex flex-col">
      {/* Barra de búsqueda */}
      <SearchBar />
      {/* Filtros */}
      <FiltersBar />
    </div>
  );
}

export default TopBar;
