import React from "react";
import logo from "../../assets/logo.svg";
import "./Home.css";
import NavBar from "../../components/NavBar";
import CardItem from "../../components/CardItem";
import Footer from "../../components/Footer";
import { Leaf, RefreshCcw, UsersRound } from "lucide-react";
import img1 from "../../assets/batman.png";
import img2 from "../../assets/capacete.png";
import img3 from "../../assets/CarroBatman.png";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="home-banner">
        <div className="top-banner">
          <img src={logo} alt="EcoTroca" width={70} />
          <h1>
            Bem-vindo à <span>EcoTroca</span>
          </h1>
          <p>
            Conectamos pessoas para trocas sustentáveis.
            <br />
            Dê nova vida aos seus itens usados e encontre tesouros únicos.
          </p>
        </div>

        <div className="search-box">
          <input type="text" placeholder="O que você está procurando?" />
          <button>Buscar →</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <UsersRound color="#43b3a0" />
            <h3>1.2K+</h3>
            <p>Usuários ativos</p>
          </div>
          <div className="stat-card">
            <RefreshCcw color="#43b3a0" />
            <h3>3.5K+</h3>
            <p>Trocas realizadas</p>
          </div>
          <div className="stat-card">
            <Leaf color="#43b3a0" />
            <h3>850+</h3>
            <p>Itens disponíveis</p>
          </div>
        </div>
      </section>

      <section className="itens-recentes">
        <h2>Itens Recentes</h2>
        <div className="cards">
          <CardItem
            imagem={img1}
            titulo="Boneco"
            desc="Item usado"
            local="Fortaleza-CE"
            badge="Brinquedo"
          />
          <CardItem
            imagem={img2}
            titulo="Capacete"
            desc="Seminovo disponível para troca"
            local="Fortaleza-CE"
            badge="Acesórios"
          />
          <CardItem
            imagem={img3}
            titulo="Carro Batman"
            desc="Carrinho de coleção do Batman"
            local="Iguatu-CE"
            badge="Brinquedo"
          />
        </div>
      </section>

      <section className="como-funciona">
        <h2>Como funciona?</h2>
        <div className="steps">
          <div className="info-cont">
            <h3 className="cont-num">1</h3>
            <h4>Cadastre seus itens</h4>
            <p>Publique fotos e descrições dos itens que deseja trocar</p>
          </div>
          <div className="info-cont">
            <h3 className="cont-num">2</h3>
            <h4>Encontre interessados</h4>
            <p>
              Navegue por itens de outros usuários e encontre trocas
              interessantes
            </p>
          </div>
          <div className="info-cont">
            <h3 className="cont-num">3</h3>
            <h4>Realize a troca</h4>
            <p>Entre em contato e combine os detalhes da troca</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
