import "./Perfil.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import usuarioService from "../../services/usuarioService";
import itemService from "../../services/itemService";

export default function Perfil() {
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState(null);
  const [itens, setItens] = useState([]);
  const [perfilLoading, setPerfilLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    localStorage.removeItem(import.meta.env.VITE_USER_KEY);
    navigate("/login");
  };

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
      const userDataString = localStorage.getItem(import.meta.env.VITE_USER_KEY);

      if (!token || !userDataString) {
        navigate("/login");
        return;
      }

      try {
        setPerfilLoading(true);
        setError(null);

        const usuario = JSON.parse(userDataString);

        const dadosCompletos = await usuarioService.buscarDadosUsuario(usuario.id);
        setPerfil(dadosCompletos);

      
        try {
          const itensDoUsuario = await itemService.buscarDadosItemUsuario(usuario.id);
          setItens(itensDoUsuario || []); // garante array vazio se vier null/undefined
        } catch (err) {
          console.error("Erro ao carregar itens:", err);
          setError("Não foi possível carregar seus itens, tente novamente mais tarde.");
          setItens([]); 
        }
      } catch (error) {
        console.error("Erro ao carregar dados do perfil:", error);
        setError("Falha ao carregar os dados do perfil.");
      } finally {
        setPerfilLoading(false);
      }
    };

    fetchPerfil();
  }, [navigate]);

  if (perfilLoading) {
    return <p>Carregando perfil...</p>;
  }

  if (error && !perfil) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <NavBar />

      <section className="perfil-container">
        <div className="perfil-grid">
          <div className="perfil-header">
            <img
              className="perfil-foto"
              src={perfil?.imgPerfil || "/default-avatar.png"}
              alt="Foto de perfil"
            />
            <div>
              <h2>{perfil?.nome}</h2>
              <p>{perfil?.email}</p>
              <p className="itens-cadastrados">{itens.length} Itens cadastrados</p>
            </div>
            <div className="perfil-actions">
              <Link to="/register" state={{ mode: "edit" }} className="perfil-actions">
                Alterar Dados
              </Link>
              <Link to={"/login"} onClick={handleLogout} className="perfil-actions">
                Sair
              </Link>
            </div>
          </div>
        </div>

        <Link to={"/anunciar"} className="btn-cadastrar">
          + Cadastrar Novo Item
        </Link>

        {/* Mensagem de erro não bloqueia a listagem de "nenhum item" */}
        {error && <p className="erro">{error}</p>}

        <h3>Meus Itens</h3>
        <div className="meus-itens">
          <div className="meus-itens2">
            {itens && itens.length > 0 ? (
              itens.map((item) => (
                <div className="item-card" key={item.id}>
                  <img src={item.imagem} alt={`Item ${item.nome}`} />
                  <div className="item-info">
                    <h4>{item.nome}</h4>
                    <p>{item.descricao}</p>
                    <span className="tag">{item.categoria?.nome}</span>
                    <p className="local">📍 {item.cidade}, {item.estado}</p>
                    <div className="item-buttons">
                      <button>Editar</button>
                      <button className="remover">Remover</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Só mostra "nenhum item" quando não há itens;
              // a mensagem de erro (se houver) aparece acima
              <p>Você ainda não cadastrou nenhum item.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
