import logo from "../assets/logo.svg";
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
        <img src={logo} alt="logotipo" width={30} />
        <h2 style={{ color: "#48a488" }}>EcoTroca</h2>
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
          <a
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
            href="/"
          >
            Início
          </a>
          <a
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
            href="/itens"
          >
            Itens
          </a>
          <a
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
            href="/sobre"
          >
            Sobre
          </a>
        </div>
        <a
          style={{
            background: "none",
            border: "1px solid #48a488",
            color: "#48a488",
            borderRadius: "7px",
            padding: "0.3rem 0.6rem",
            cursor: "pointer",
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
          href="/anunciar"
        >
          + Anunciar Item
        </a>
        <a
          style={{
            background: "none",
            border: "none",
            color: "#000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
          href="/login"
        >
          <User width={20} />
          Entrar
        </a>
      </nav>
    </header>
  );
}
