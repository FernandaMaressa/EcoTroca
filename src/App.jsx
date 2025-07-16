import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Perfil from "./pages/perfil/Perfil";
import Itens from "./pages/itens/Itens";
import Sobre from "./pages/sobre/Sobre";
import Anunciar from "./pages/anunciar/Anunciar";
import EditarPerfil from "./pages/editarPerfil/EditarPerfil";
import Detalhes from "./pages/detalhes/detalhes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/itens" element={<Itens />} />
        <Route path="/anunciar" element={<Anunciar />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}
