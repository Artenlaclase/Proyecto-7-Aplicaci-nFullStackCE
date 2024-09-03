import React, { useContext, useEffect, useState } from "react";
import GuitarContext from "../../contexts/guitars/GuitarContext";
import PaypalButton from "./PayPalButton";

export const GuitarList = () => {
  const [guitar, setGuitar] = useState({
    nombre: "",
    precio: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const ctx = useContext(GuitarContext);
  const { guitars, createGuitar, getGuitars, updateGuitar, deleteGuitar } = ctx;

  useEffect(() => {
    getGuitars();
  }, []);

  const handleChange = (event) => {
    setGuitar({
      ...guitar,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataToCreateGuitar = (event) => {
    event.preventDefault();
    if (!guitar.nombre.trim() || !guitar.precio.trim()) {
      return setError("Debes llenar todos los campos de texto");
    }
    createGuitar(guitar);
    setError(null);
  };

  const sendDataToUpdateGuitar = (event) => {
    event.preventDefault();
    if (!guitar.nombre.trim() || !guitar.precio.toString().trim()) {
      return setError("Debes llenar todos los campos de texto");
    }

    updateGuitar(id, guitar);
    setId(null);

    setGuitar({
      nombre: "",
      precio: "",
    });

    setEditMode(false);
    setError(null);
  };

  const sendDataToDeleteGuitar = (element) => {
    deleteGuitar(element._id);
  };

  const activateEditMode = (element) => {
    setEditMode(true);
    setId(element._id);
    setGuitar({
      nombre: element.nombre,
      precio: element.precio,
    });
  };

  return (
    <div>
      {/* TÍTULO (DEPENDIENDO DEL MODO EN EL QUE ESTEMOS) */}
      <h1>{editMode ? "Edita guitarra" : "Crea una guitarra"}</h1>
      {/* NUESTRO FORMULARIO */}
      <form
        onSubmit={
          editMode
            ? (e) => {
                sendDataToUpdateGuitar(e);
              }
            : (e) => {
                sendDataToCreateGuitar(e);
              }
        }
      >
        <h2>Escribe el nombre de la guitarra</h2>
        <input
          name="nombre"
          onChange={(e) => {
            handleChange(e);
          }}
          value={guitar.nombre}
        />
        <h2>Escribe el precio</h2>
        <input
          name="precio"
          onChange={(e) => {
            handleChange(e);
          }}
          value={guitar.precio}
          type="number"
        />
        <button type="submit">
          {editMode ? "Editar guitarra" : "Crear guitarra"}
        </button>
      </form>
      {error ? error : null}
      <h1>Lista de Guitarras</h1>
      {guitars.map((guitar) => {
        return (
          <div key={guitar._id}>
            <h2>{guitar.nombre}</h2>
            <p>Precio: ${guitar.precio}</p>
            <PaypalButton valor={guitar.precio} />
            {<button onClick={() => activateEditMode(guitar)}>Editar</button>}
            <button onClick={() => sendDataToDeleteGuitar(guitar)}>
              Borrar
            </button>
          </div>
        );
      })}
    </div>
  );
};
