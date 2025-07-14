import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="logotipo" width={30} /></Link>
        <Link to="/" className="navbar-title">EcoTroca</Link>
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
          <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link to="/itens" className="navbar-link" onClick={() => setMenuOpen(false)}>Itens</Link>
          <Link to="/sobre" className="navbar-link" onClick={() => setMenuOpen(false)}>Sobre</Link>
        </div>
        <Link to="/anunciar" className="navbar-button" onClick={() => setMenuOpen(false)}>+ Anunciar Item</Link>
        <Link to="/login" className="navbar-login" onClick={() => setMenuOpen(false)}>
          <User width={20}/> Entrar
        </Link>
      </nav>
    </header>
  );
}
