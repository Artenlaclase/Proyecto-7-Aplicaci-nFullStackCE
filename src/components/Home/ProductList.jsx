import React from 'react';
import PaypalButton from "./PayPalButton";

const Products = ({ products, activateEditMode, sendDataToDeleteProduct }) => {
  return (
    <div>
      <h1>Relojes</h1>
      {products.map((product) => (
        <div key={product._id}>
          <img src={product.imagen} width='200px' height='200px' alt={product.nombre} />
          <h2>{product.nombre}</h2>
          <p>Precio: ${product.precio}</p>
          <PaypalButton valor={product.precio} />

          {/* <button onClick={() => activateEditMode(product)}>Editar</button>
          <button onClick={() => sendDataToDeleteProduct(product)}>Borrar</button> */}
        </div>
      ))}
    </div>
  );
};

export default Products;