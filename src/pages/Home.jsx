import React from "react";
import NavBar from "../components/Navbar";
import CardItem from "../components/CardItem.jsx";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />

      {/* Banner */}
      <section style={{ textAlign: "center", padding: "4rem 2rem", background: "#e9f7f0" }}>
        <img src="https://img.icons8.com/ios-filled/100/48a488/leaf.png" alt="EcoTroca" />
        <h1>Bem-vindo à <span style={{ color: "#48a488" }}>EcoTroca</span></h1>
        <p>Conectamos pessoas para trocas sustentáveis.<br/>
        Dê nova vida aos seus itens usados e encontre tesouros únicos.</p>

        <div style={{ marginTop: "2rem" }}>
          <input
            type="text"
            placeholder="O que você está procurando?"
            style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
          />
          <button style={{ color: "#fff", background: "#48a488", padding: "0.5rem 1rem", borderRadius: "4px" }}>
            Buscar →
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
          <div style={{ background: "#fff", padding: "1rem 2rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <h3>1.2K+</h3>
            <p>Usuários ativos</p>
          </div>
          <div style={{ background: "#fff", padding: "1rem 2rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <h3>3.5K+</h3>
            <p>Trocas realizadas</p>
          </div>
          <div style={{ background: "#fff", padding: "1rem 2rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <h3>850+</h3>
            <p>Itens disponíveis</p>
          </div>
        </div>
      </section>

      {/* Itens Recentes */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2>Itens Recentes</h2>
        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>

      {/* Como funciona */}
      <section style={{ padding: "4rem 2rem", background: "#e9f7f0" }}>
        <h2 style={{ textAlign: "center" }}>Como funciona?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", marginTop: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h3>1</h3>
            <p>Cadastre seus itens</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>2</h3>
            <p>Encontre interessados</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>3</h3>
            <p>Realize a troca</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
