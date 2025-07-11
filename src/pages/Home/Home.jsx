import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar";
import CardItem from "../../components/CardItem";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />

      <section className="home-banner">
        <img src="https://img.icons8.com/ios-filled/100/48a488/leaf.png" alt="EcoTroca" />
        <h1>Bem-vindo à <span>EcoTroca</span></h1>
        <p>Conectamos pessoas para trocas sustentáveis.<br/>
        Dê nova vida aos seus itens usados e encontre tesouros únicos.</p>

        <div className="search-box">
          <input type="text" placeholder="O que você está procurando?" />
          <button>Buscar →</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3>1.2K+</h3>
            <p>Usuários ativos</p>
          </div>
          <div className="stat-card">
            <h3>3.5K+</h3>
            <p>Trocas realizadas</p>
          </div>
          <div className="stat-card">
            <h3>850+</h3>
            <p>Itens disponíveis</p>
          </div>
        </div>
      </section>

      <section className="itens-recentes">
        <h2>Itens Recentes</h2>
        <div className="cards">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>

      <section className="como-funciona">
        <h2>Como funciona?</h2>
        <div className="steps">
          <div>
            <h3>1</h3>
            <p>Cadastre seus itens</p>
          </div>
          <div>
            <h3>2</h3>
            <p>Encontre interessados</p>
          </div>
          <div>
            <h3>3</h3>
            <p>Realize a troca</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
