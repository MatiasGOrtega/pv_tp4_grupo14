const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search-bar">
      <h2>Buscar producto</h2>
      <input
        type="text"
        placeholder="Buscar por descripción o ID."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar