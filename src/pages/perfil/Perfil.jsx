import React from "react";
import "./Perfil.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import logo from "../../assets/logo.svg";

export default function Perfil() {
  return (
    <div>
      <NavBar logo={logo} />

      <section className="perfil-container">
        <div className="perfil-header">
          <img 
            className="perfil-avatar"
            src="https://img.icons8.com/ios-filled/100/48a488/user-male-circle.png" 
            alt="Avatar"
          />
          <div>
            <h2>Meu Perfil</h2>
            <p>seu@email.com</p>
            <p className="itens-cadastrados">2 Itens cadastrados</p>
          </div>
          <div className="perfil-actions">
            <button>Alterar Dados</button>
            <button>Sair</button>
          </div>
        </div>

        <button className="btn-cadastrar">+ Cadastrar Novo Item</button>

        <h3>Meus Itens</h3>
        <div className="meus-itens">
          <div className="item-card">
            <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5&ixlib=rb-4.0.3&q=80&w=400" alt="Item"/>
            <div className="item-info">
              <h4>Boneco Batman</h4>
              <p>Meu filho ganhou dois iguais.</p>
              <span className="tag">Brinquedos</span>
              <p className="local">📍Iguatu - CE</p>
              <div className="item-buttons">
                <button>Editar</button>
                <button className="remover">Remover</button>
              </div>
            </div>
          </div>

          <div className="item-card">
            <img src="https://images.unsplash.com/photo-1608393681318-f6e78b5f9293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5&ixlib=rb-4.0.3&q=80&w=400" alt="Item"/>
            <div className="item-info">
              <h4>Capacete</h4>
              <p>Usado por 1 ano e alguns meses.</p>
              <span className="tag">Móveis</span>
              <p className="local">📍 Acopiara - CE</p>
              <div className="item-buttons">
                <button>Editar</button>
                <button className="remover">Remover</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
