import React from 'react';
import PaypalButton from "./PayPalButton";

const Products = ({ product, activateEditMode, sendDataToDeleteGuitar }) => {
  return (
    <div>
      <h1>Relojes</h1>
      {product.map((product) => (
        <div key={product._id}>
          <h2>{product.nombre}</h2>
          <p>Precio: ${product.precio}</p>
          <PaypalButton valor={product.precio} />
          <button onClick={() => activateEditMode(product)}>Editar</button>
          <button onClick={() => sendDataToDeleteGuitar(product)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};

export default Products;