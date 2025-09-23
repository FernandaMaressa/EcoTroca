import React from "react";
import logo from "../../assets/logo.svg";
import "./Home.css";
import NavBar from "../../components/NavBar";
import CardItem from "../../components/CardItem";
import Footer from "../../components/Footer";
import { Leaf, RefreshCcw, UsersRound } from "lucide-react";
import { useState, useEffect } from "react";
import itemService from "../../services/itemService"

export default function Home() {
  const [itensRecentes, setItensRecentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nomeUsuario, setUserName] = useState(null);

  useEffect(() => {

    const userDataString = localStorage.getItem(import.meta.env.VITE_USER_KEY);
    if (userDataString) {
      const usuario = JSON.parse(userDataString);
      setUserName(usuario.nome);
    }
  }, []);

  useEffect(() => {
    const carregarItensRecentes = async () => {
      try {
        setLoading(true);

        const todosItens = await itemService.buscarDados();

        const itensFiltrados = todosItens.slice(0, 3);
        setItensRecentes(itensFiltrados);
      } catch (error) {
        console.error("Erro ao carregar itens recentes:", error);
      } finally {
        setLoading(false);
      }
    };
    carregarItensRecentes();
  }, []);

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

        <div className="stats-container1">
          <div className="stats-container2">
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
        </div>
      </section>

      <section className="itens-recentes">
        <h2>Itens Recentes</h2>
        <div className="cards">
          {loading ? (
            <p>Carregando itens...</p>
          ) : (
            itensRecentes.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                imagem={item.imagem}
                titulo={item.nome}
                desc={item.descricao}
                local={`${item.cidade}, ${item.estado}`}
                badge={item.categoria.nome}
              />
            ))
          )}
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
