import React from "react";
import "../styles/loader.css";

const DataTable = ({ registros, onEliminarRegistro, onCrearRegistro }) => {

  
  const handleDeleteRegistro = (index) => {
    onEliminarRegistro(index);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.fecha}</td>
              <td>{registro.valor}</td>
              <td>
                <button onClick={() => handleDeleteRegistro(index)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onCrearRegistro}>Crear</button>
    </div>
  );
};

export default DataTable;
