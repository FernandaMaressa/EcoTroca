import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.7rem",
        background: "#43B3A0",
        marginTop: "2rem",
        color: "#ffffff",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "0.7",
            flexDirection: "column",
            gap: 7,
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#fff" }}>EcoTroca</h2>
          <div>
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
          </div>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: 7 }}>Venha fazer parte</h2>
          <p style={{ color: "#fff", fontSize: "0.9rem" }}>
            Junte-se à nossa comunidade e comece a fazer a diferença hoje mesmo.
            Cada troca é um passo em direção a um futuro mais sustentável.
          </p>
        </div>
        <div style={{ flex: "0.7", textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: 7 }}>Links</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <Link to={"/"} style={{color: "#fff", textDecoration: "none"}}>Início</Link>
            <Link to={"/sobre"} style={{color: "#fff", textDecoration: "none"}}>Sobre</Link>
            <Link to={"/itens"} style={{color: "#fff", textDecoration: "none"}}>Produtos</Link>
          </div>
        </div>
      </section>
      <p
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        © 2025 EcoTroca.
      </p>
    </footer>
  );
}
