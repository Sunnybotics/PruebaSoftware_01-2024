import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { checkAuthentication } from "../helpers/checkAuth";

const Graph = () => {
  /*Shows a message for 2 seconds indicating that a login is missing */
  //const history = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    
    const response= checkAuthentication()
    setIsAuthenticated(response.authenticated)
      // .then((response) => {
      //   setIsAuthenticated(response.authenticated);
      // })
      // .catch(() => {
      //   setIsAuthenticated(false);
      // });

    //setUserEmail(getCookieValue("userEmail") || null);
  }, []);

  return (
    <div>
      <Header />
      <p>Success</p>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/logout">Logout</Link>
      {isAuthenticated && (<p>"Está autenticado"</p>)}
    </div>
  );
};

export default Graph;
