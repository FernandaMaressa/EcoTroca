import "./Perfil.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import batman from "../../assets/batman.png";
import capacete from "../../assets/capacete.png";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import authService from "../../services/authService";

export default function Perfil() {

  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      setUsuario(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!usuario) {
    return <p>Carregando informações...</p>;
  }

  return (
    <div>
      <NavBar />

      <section className="perfil-container">
        <div className="perfil-grid">
          <div className="perfil-header">
            <img
              className="perfil-foto"
              src={usuario.imgPerfilBase64 || "/default-avatar.png"} 
              alt="Foto de perfil" />
            <div>
              <h2>{usuario.nome}</h2>
              <p>{usuario.email}</p>
              <p className="itens-cadastrados">{usuario.itens?.length || 0} Itens cadastrados</p>
            </div>
            <div className="perfil-actions">
              <Link to={"/editarperfil"} className="perfil-actions">
                Alterar Dados
              </Link>
              <Link to={"/login"} className="perfil-actions">
                Sair
              </Link>
            </div>
          </div>
        </div>
        <Link to={"/anunciar"} className="btn-cadastrar">
          + Cadastrar Novo Item
        </Link>

        <h3>Meus Itens</h3>
        <div className="meus-itens">
          <div className="meus-itens2">
            {usuario.itens && usuario.itens.length > 0 ? (
              usuario.itens.map((item) => (
              <div className="item-card" key={item.id}>
                <img src={item.imagemBase64} alt={`Item ${item.nome}`} />
                <div className="item-info">
                  <h4>{item.nome}</h4>
                  <p>{item.descricao}</p>
                  <span className="tag">{item.categoria}</span>
                  <p className="local">📍 {item.local}</p>
                  <div className="item-buttons">
                    <button>Editar</button>
                    <button className="remover">Remover</button>
                  </div>
                </div>
              </div>
              )) 
            ) : (
              <p>Você ainda não cadastrou nenhum item.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
