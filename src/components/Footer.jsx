import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container">
        <div className="footer-brand">
          <h2>EcoTroca</h2>
          <div className="footer-stars">
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
            <Star color="#ffff00" fill="#ffff00" />
          </div>
        </div>

        <div className="footer-community">
          <h2>Venha fazer parte</h2>
          <p>
            Junte-se à nossa comunidade e comece a fazer a diferença hoje mesmo.
            Cada troca é um passo em direção a um futuro mais sustentável.
          </p>
        </div>

        <div className="footer-links">
          <h2>Links</h2>
          <div className="links-list">
            <Link to={"/"}>Início</Link>
            <Link to={"/sobre"}>Sobre</Link>
            <Link to={"/itens"}>Itens</Link>
          </div>
        </div>
      </section>

      <p className="footer-copy">© 2025 EcoTroca.</p>
    </footer>
  );
}
