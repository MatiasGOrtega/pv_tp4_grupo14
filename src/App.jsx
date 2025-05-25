import { useState, useEffect, useCallback, useMemo } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
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

  const handleDeleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const handleEditProduct = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  const handleUpdateProduct = useCallback((updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  }, []);

  const filteredProducts = useMemo(() => {
   return products.filter(p =>
     p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.id.toString().includes(searchTerm)
   );
  }, [products, searchTerm]);


  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      
      <ProductForm
        onAdd={handleAddProduct}
        onUpdate={handleUpdateProduct}
        editingProduct={editingProduct}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList
        products={filteredProducts}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />
    </div>
  );
}

export default App
