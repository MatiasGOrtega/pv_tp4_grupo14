function ProductItem({ product }) {
  return (
    <li key={product.id} className='product-item'>
      <div>
        <strong>{product.descripcion}</strong> - ${product.precioUnitario.toFixed(2)} -
        Stock: {product.stock}
        <small> (ID: {product.id})</small>
      </div>
      <div>
        <button onClick={() => { }}>Editar</button>
        <button
          onClick={() => { }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default ProductItem