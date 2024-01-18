import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import { UserCreate } from "./components/auth/UserCreate";
import "./styles/main.css";
import Logout from "./components/auth/Logout";
import GraphPage from "./components/GraphPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Login />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/register" element={<UserCreate />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
