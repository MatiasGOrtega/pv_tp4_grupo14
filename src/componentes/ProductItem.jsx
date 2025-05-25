const ProductItem = ({ product, onDelete, onEdit }) => (
  <li key={product.id} className="product-item">
    <div>
      <p>
        <strong>Descripción:</strong> {product.descripcion}
      </p>
      <p>
        <strong>Precio Unitario:</strong> ${product.precioUnitario.toFixed(2)}
      </p>
      <p>
        <strong>Descuento:</strong> {product.descuento}%
      </p>
      <p>
        <strong>Precio con Descuento:</strong> $
        {product.precioConDescuento.toFixed(2)}
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      <small>(ID: {product.id})</small>
    </div>
    <div>
      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </div>
  </li>
);

export default ProductItem;
