import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { checkAuthentication } from "../helpers/checkAuth";
import DataTable from "./DataTable";
import initialData from "../data/initial_data.json";
import Loader from "./Loader";
import { getData } from "../helpers/axios";
import DataChart from "./DataChart";
import { errorMessage } from "../helpers/errorMessage";

const GraphPage = () => {
  /* Muestra el usuario actual y el gráfico x-y asociado a la tabla de datos */
  const endpoint="graph/"
  //const history = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    checkAuthentication()
      .then((response) => {
        setIsAuthenticated(response.authenticated);
        setUserEmail(response.userEmail)
      })
      .catch(() => {
        setIsAuthenticated(false);
        setUserEmail("")
      });
    
    setData(initialData);
    setLoading(true);

    getData(endpoint)
        .then((response) => {
            setData(response);
            setError(null);
        })
        .catch((error) => {
            setError(errorMessage(error));
        })
        .finally(() => {
            setLoading(false);
        });

  }, []);

  const handleCreateRegistro = () => {
    // Crear un nuevo registro (simulado, ya que no puedes escribir en el archivo JSON)
    const nuevoRegistro = {
      fecha: "08/01/2024",
      valor: (Math.random() * (29.9 - 24.0) + 24.0).toFixed(1),
    };

    // Actualizar la tabla después de la creación
    setData([...registros, nuevoRegistro]);
  };

  const handleDeleteRegistro = (index) => {
    // Eliminar un registro
    const nuevosRegistros = [...registros];
    nuevosRegistros.splice(index, 1);
    setData(nuevosRegistros);
  };
  console.log(initialData)

  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
      />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <DataTable
        registros={data}
        onCrearRegistro={handleCreateRegistro}
        onEliminarRegistro={handleDeleteRegistro}
      />

      <DataChart datos={data}/>
    </div>
  );
};

export default GraphPage;
