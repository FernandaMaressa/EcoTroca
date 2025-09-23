import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn } from "lucide-react";
import usuarioService from "../services/usuarioService";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem(import.meta.env.VITE_USER_KEY);
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);

        if (userDataString && token) {
          const usuarioLocalStorage = JSON.parse(userDataString);

          const usuarioId = usuarioLocalStorage.id;
          
          const usuarioCompleto = await usuarioService.buscarDadosUsuario(usuarioId);
          
          if (usuarioCompleto && usuarioCompleto.nome) {
            setNomeUsuario(usuarioCompleto.nome);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        setNomeUsuario(null);
      }
    };

    fetchUserData();
  }, []);

  const isLoggedIn = !!nomeUsuario;

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logotipo" width={30} />
        </Link>
        <Link to="/" className="navbar-title">
          EcoTroca
        </Link>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <div className="navbar-menu">
          <Link
            to="/"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/itens"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Itens
          </Link>
          <Link
            to="/sobre"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
        </div>
        <Link
          to="/anunciar"
          className="navbar-button"
          onClick={() => setMenuOpen(false)}
        >
          + Anunciar Item
        </Link>
        <div className="navbar-menu">
          {
          isLoggedIn ? (
            <Link to="/perfil" className="login-link navbar-link"> <User width={20} /> {nomeUsuario}</Link>
          ) : (
            <Link to="/login" className="login-link navbar-link"> <LogIn width={20} /> Login</Link>
          )
          }
        </div>
      </nav>
    </header>
  );
}