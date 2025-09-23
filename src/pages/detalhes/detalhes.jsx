import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Detalhes.css";
import { MessageCircleMoreIcon } from "lucide-react";
import { useState, useEffect } from "react";
import itemService from "../../services/itemService";

export default function Detalhes() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, timestamp: Date.now() }]);
    setInput("");
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const itemId = parseInt(id, 10);
        const itemData = await itemService.buscarDadosItem(itemId);
        setItem(itemData);
      } catch (error) {
        console.error("Erro ao carregar item:", error);
        setError("Não foi possível carregar os detalhes do item.");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="page-wrapper">
        <NavBar />
        <div className="content-wrapper">
          <p>Carregando item...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <NavBar />
        <div className="content-wrapper">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="page-wrapper">
        <NavBar />
        <div className="content-wrapper">
          <p>Item não encontrado!</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-wrapper">
        <div className="detalhes-container">
          <img
            src={item.imagem}
            alt={item.nome}
            className="detalhes-imagem"
          />
          <div className="detalhes-info">
            <h2>{item.nome}</h2>
            <p className="detalhes-data">Publicado em {new Date(item.dataPublicacao).toLocaleDateString('pt-BR')}</p>
            <p className="detalhes-desc">{item.descricao}</p>
            <p className="detalhes-nome">Anunciante: {item.usuario.nome}</p>
            <p className="detalhes-local">📍 {item.cidade}, {item.estado}</p>
            <span className="detalhes-badge">{item.categoria.nome}</span>

            <button className="detalhes-botao" onClick={() => setIsOpen(!isOpen)}>
              <MessageCircleMoreIcon size={20} /> Abrir chat!
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <span className="chat-icon">💬</span>
            <span className="chat-title">Chat com {item.usuario.nome || "Anunciante"}</span>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message user-message">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Digite sua mensagem.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="chat-send-button" onClick={handleSend}>
              📤
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
