import { useState, useEffect } from "react";

const ProductForm = ({ onAdd, onUpdate, editingProduct }) => {
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
      setProduct({
        id: "",
        descripcion: "",
        precioUnitario: "",
        descuento: "",
        stock: "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const precioConDescuento =
      product.precioUnitario * (1 - product.descuento / 100);
    const newProduct = {
      ...product,
      id: +product.id,
      precioUnitario: +product.precioUnitario,
      descuento: +product.descuento,
      stock: +product.stock,
      precioConDescuento,
    };
    if (editingProduct) {
      onUpdate(newProduct);
    } else {
      newProduct.id = contadorId;
      setContadorId((prev) => prev + 1);
      onAdd(newProduct);
    }

    setProduct({
      id: "",
      descripcion: "",
      precioUnitario: "",
      descuento: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default ProductForm;
