import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/loader.css";

const DataTable = ({ data, handleDelete, onCreateItem }) => {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {localData.map((item) => (
            <tr key={item.id}>
              <td>{item.fecha}</td>
              <td>{item.valor}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                  <DeleteIcon fontSize="small" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="create-button" onClick={onCreateItem}>
        Create
      </button>
    </div>
  );
};

export default DataTable;
