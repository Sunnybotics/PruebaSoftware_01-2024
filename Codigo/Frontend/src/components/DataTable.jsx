import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "../styles/loader.css";

const DataTable = ({ registros, onEliminarRegistro, onCreateItem }) => {

  
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
                  <DeleteIcon fontSize="small"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="create-button" onClick={onCreateItem}>Create</button>
    </div>
  );
};

export default DataTable;
