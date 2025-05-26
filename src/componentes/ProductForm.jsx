import { useState, useEffect } from "react";

const productDefault = {
  id: "",
  descripcion: "",
  precioUnitario: "",
  descuento: "",
  stock: "",
};

const ProductForm = ({ editingProduct, onAdd, onUpdate, onReset }) => {
  const [product, setProduct] = useState({
    id: "",
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    stock: "",
  });
  const [contadorId, setContadorId] = useState(1);

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    } else {
      setProduct(productDefault);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const precioConDescuento = product.precioUnitario * (1 - product.descuento / 100);
    console.log("Precio con descuento:", precioConDescuento);
    const newProduct = {
      descripcion: product.descripcion,
      precioConDescuento: precioConDescuento,
      precioUnitario: parseFloat(product.precioUnitario),
      descuento: parseFloat(product.descuento),
      stock: parseInt(product.stock, 10),
    };
    if (editingProduct) {
      onUpdate({ ...newProduct, id: editingProduct.id });
    } else {
      newProduct.id = contadorId;
      setContadorId((prev) => prev + 1);
      onAdd(newProduct);
    }

    setProduct(productDefault);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        className="in"
        name="descripcion"
        placeholder="Descripción"
        value={product.descripcion}
        onChange={handleChange}
        required
      />
      <input
        className="in"
        name="precioUnitario"
        type="number"
        placeholder="Precio Unitario"
        value={product.precioUnitario}
        onChange={handleChange}
        required
      />
      <input
        className="in"
        name="descuento"
        type="number"
        placeholder="Descuento %"
        value={product.descuento}
        onChange={handleChange}
        required
      />
      <input
        className="in"
        name="stock"
        type="number"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editingProduct ? "Actualizar" : "Agregar"} Producto
      </button>
      {editingProduct && (
        <button type="button" onClick={onReset}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProductForm;
