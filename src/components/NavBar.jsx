import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function NavBar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Link to={"/"}><img src={logo} alt="logotipo" width={30} /></Link>
        <Link to={"/"} style={{textDecoration: "none"}}><h2 style={{ color: "#48a488" }}>EcoTroca</h2></Link> 
      </div>
      <nav
        style={{
          display: "flex",
          gap: "1.7rem",
          padding: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            paddingRight: 7,
          }}
        >
          <Link to={"/"} style={{
            background: "none",
            border: "none",
            color: "#000",
            cursor: "pointer",
            fontSize: "0.95rem",
            textDecoration: "none",
          }}>Início</Link>
          <Link to={"/itens"} style={{
            background: "none",
            border: "none",
            color: "#000",
            cursor: "pointer",
            fontSize: "0.95rem",
            textDecoration: "none",
          }}>Itens</Link>
          <Link to={"/sobre"} style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}>Sobre</Link>
        </div>
        <Link to={"/anunciar"} style={{
            background: "none",
            border: "1px solid #48a488",
            color: "#48a488",
            borderRadius: "7px",
            padding: "0.3rem 0.6rem",
            cursor: "pointer",
            fontSize: "0.95rem",
            textDecoration: "none",
          }}>+ Anunciar Item</Link>
          <Link to={"/login"} style={{
            background: "none",
            border: "none",
            color: "#000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}> <User width={20}/> Entrar</Link>
      </nav>
    </header>
  );
}
