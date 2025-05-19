import ProductItem from "./ProductItem";

function ProductList({
  products,
}) {
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
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList