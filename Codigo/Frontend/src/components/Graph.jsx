import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { checkAuthentication } from "../helpers/checkAuth";

const Graph = () => {
  /* Muestra el usuario actual y el gráfico x-y asociado a la tabla de datos */

  //const history = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userEmail, setUserEmail] = useState("");

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

  }, []);

  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
      />

    </div>
  );
};

export default Graph;
