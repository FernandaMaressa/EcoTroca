import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Perfil from "./pages/perfil/Perfil";
import Itens from "./pages/itens/Itens";
import Sobre from "./pages/sobre/Sobre";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/itens" element={<Itens />} />
      </Routes>
    </Router>
  );
}
