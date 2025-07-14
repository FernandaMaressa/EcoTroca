import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="logotipo" width={30} /></Link>
        <Link to="/" className="navbar-title">EcoTroca</Link>
      </div>
      <nav className="navbar-links">
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Início</Link>
          <Link to="/itens" className="navbar-link">Itens</Link>
          <Link to="/sobre" className="navbar-link">Sobre</Link>
        </div>
        <Link to="/anunciar" className="navbar-button">+ Anunciar Item</Link>
        <Link to="/login" className="navbar-login">
          <User width={20}/> Entrar
        </Link>
      </nav>
    </header>
  );
}
