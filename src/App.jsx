import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('Productos actualizados:', products);
  }, [products]);

  const handleAddProduct = useCallback((product) => {
    setProducts(prev => [...prev, product]);
  }, []);

  const handleUpdateProduct = useCallback((updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  }, []);

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      
      <ProductForm
        onAdd={handleAddProduct}
        onUpdate={handleUpdateProduct}
        editingProduct={editingProduct}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App
