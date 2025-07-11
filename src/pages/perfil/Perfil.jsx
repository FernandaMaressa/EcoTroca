import React from "react";
import "./Perfil.css";
import batman from "../../assets/batman.png";
import capacete from "../../assets/capacete.png";
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
            <img src={batman} alt="Item Batman"/>
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
            <img src={capacete} alt="Item Capacete"/>
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
