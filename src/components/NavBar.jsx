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
            gap: "1.5rem",
            paddingRight: 7,
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Início
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Itens
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#000",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Sobre
          </button>
        </div>
        <button
          style={{
            background: "none",
            border: "1px solid #48a488",
            color: "#48a488",
            borderRadius: "7px",
            padding: "0.3rem 0.6rem",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          + Anunciar Item
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: "0.95rem",
          }}
        >
          <User width={20} />
          Entrar
        </button>
      </nav>
    </header>
  );
}
