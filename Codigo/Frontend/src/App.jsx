import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Graph from "./components/Graph";
import { UserCreate } from "./components/auth/UserCreate";
import "./styles/main.css";
import Logout from "./components/auth/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Login />} />
          <Route path="/graph" element={<Graph />} />
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
