import { useState, useEffect, useCallback, useMemo } from 'react';
import ProductForm from './componentes/ProductForm';
import ProductList from './componentes/ProductList';
import SearchBar from './componentes/SearchBar';
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
    setProducts(prevProd => prevProd.filter(product => product.id !== id));
    if (editingProduct?.id === id) {
      setEditingProduct(null);
    }
  }, [editingProduct]);

  const handleEditProduct = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  const handleUpdateProduct = useCallback((updatedProduct) => {
    setProducts(prevProds =>
      prevProds.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    setEditingProduct(null);
  }, []);

  const handleResetForm = useCallback(() => {
    setEditingProduct(null);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    return products.filter(p =>
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm)
    );
  }, [products, searchTerm]);


  return (
    <div className="container">
      <h1>Gestión de Productos</h1>

      <ProductForm
        editingProduct={editingProduct}
        onAdd={handleAddProduct}
        onUpdate={handleUpdateProduct}
        onReset={handleResetForm}
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
