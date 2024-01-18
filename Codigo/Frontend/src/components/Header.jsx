import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
//import { useAuth } from "../context/AuthContext";
import "../styles/header.css";

export function Header() {
  /*Información de usuario actual y links de login logout*/

  // const { isAuthenticated, isAdmin, userEmail } = useAuth();

  // const condition1 = isAuthenticated 
  // const condition2 = !isAuthenticated;
  // const message1 = `You are logged as: ${userEmail} (Admin User)`;
  // const message3 = `You are not logged`;
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
          {/* {condition1 && <p>{message1}</p>}
          {condition2 && <p>{message2}</p>}
          {condition3 && <p>{message3}</p>} */}
          <p>You are not logged</p>
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
