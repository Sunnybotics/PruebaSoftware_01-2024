import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
//import { useAuth } from "../context/AuthContext";
import "../styles/header.css";

export function Header({ isAuthenticated, userEmail }) {
  /*Información de usuario actual y links de login logout*/

  // const { isAuthenticated, isAdmin, userEmail } = useAuth();

  const condition = isAuthenticated 
  // const condition2 = !isAuthenticated;
  const message1 = `You are logged as: ${userEmail}`;
  const message2 = `You are not logged`;
  const history = useNavigate();

  const onLogout = () => {
    history('/logout')
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: "#2a6968",
        },
    },
  });

  return (
    <div className="my-header">
      <ThemeProvider theme={theme}>
        <div>
          {condition ? (<p>{message1}</p>):(<p>{message2}</p>)}
          
          {/* <p>You are not logged</p> */}
        </div>

        <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LogoutIcon />}
          onClick={onLogout}
        >
          Logout
        </Button>
          {/* <ul className="header-list">
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul> */}
        </div>
      </ThemeProvider>
    </div>
  );
}
