import ProductItem from "./ProductItem";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos para mostrar</p>
      ) : (
        <ul>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList