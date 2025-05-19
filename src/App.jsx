import { useState } from 'react'
import './App.css'
import { productsData } from './data/products';
import ProductForm from './componentes/ProductForm';
import SearchBar from './componentes/SearchBar';
import ProductList from './componentes/ProductList';

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="product-manager">
      <h1>Gestión de Productos</h1>

      <ProductForm />

      <SearchBar />

      <ProductList products={products} />
    </div>
  );
}

export default App
