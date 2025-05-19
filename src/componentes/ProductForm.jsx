function ProductForm() {
  return (
    <div className="product-form">
      <h2>Formulario</h2>
      <input
        type="text"
        name="id"
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        min="0"
        step="0.01"
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        min="0"
      />

      <button onClick={() => { }}>Agregar Producto</button>
    </div>
  );
}

export default ProductForm