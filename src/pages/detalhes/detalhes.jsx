import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Detalhes.css";
import { MessageCircleMoreIcon } from "lucide-react";
import { useState } from "react";

import img1 from "../../assets/batman.png";
import img2 from "../../assets/capacete.png";
import img3 from "../../assets/CarroBatman.png";

export default function Detalhes() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, timestamp: Date.now() }]);
    setInput("");
  };

  const { id } = useParams();
  const itens = [
    {
      id: "1",
      imagem: img1,
      nome: "Maciel Araujo",
      data: "15/09/2025",
      titulo: "Boneco",
      desc: "Boneco do Batman em bom estado. Ideal para colecionadores, possuo um outro igual.",
      local: "Fortaleza-CE",
      badge: "Brinquedo",
    },
    {
      id: "2",
      imagem: img2,
      nome: "Bianca Leão",
      data: "22/10/2025",
      titulo: "Capacete",
      desc: "Seminovo disponível para troca. Ideal para quem gosta de aventuras ao ar livre, apenas com algumas marcas de uso.",
      local: "Fortaleza-CE",
      badge: "Acessórios",
    },
    {
      id: "3",
      imagem: img3,
      nome: "Fernanda Antunes",
      titulo: "Carro Batman",
      desc: "Carrinho de coleção do Batman. Perfeito para fãs do herói, em excelente estado de conservação.",
      local: "Iguatu-CE",
      badge: "Brinquedo",
    },
    {
      id: "4",
      imagem: "https://cdn.pixabay.com/photo/2018/01/05/04/27/object-3062127_1280.jpg",
      nome: "Alef Samuel",
      data: "12/08/2025",
      titulo: "Flores",
      desc: "Decoração de mesa com flores de plástico, em bom estado. Perfeito para dar um toque especial à sua casa.",
      local: "Fortaleza-CE",
      badge: "Flores",
    },
    {
      id: "5",
      imagem: "https://cdn.pixabay.com/photo/2017/11/20/05/39/object-2964498_960_720.jpg",
      nome: "Anna Lays",
      data: "01/06/2025",
      titulo: "Bonecos Artesanais",
      desc: "Itens manuais decorativos, feitos com carinho. Perfeito para quem aprecia arte e originalidade.",
      local: "Fortaleza-CE",
      badge: "Decoração",
    },
    {
      id: "6",
      imagem: "https://cdn.pixabay.com/photo/2017/08/07/23/55/still-2609350_1280.jpg",
      nome: "Gabriel Dias",
      data: "23/07/2025",
      titulo: "Relógio",
      desc: "Possui configuração de alarme e voz anunciando a hora. Ideal para quem gosta de tecnologia e praticidade.",
      local: "Fortaleza-CE",
      badge: "Utilitários",
    },
    {
      id: "7",
      imagem: "https://cdn.pixabay.com/photo/2017/08/07/20/39/technology-2607623_1280.jpg",
      nome: "Anna Clara",
      data: "23/04/2025",
      titulo: "Fones de ouvido",
      desc: "Item usado por 2 meses, funciona perfeitamente. Ideal para quem gosta de música e praticidade.",
      local: "Fortaleza-CE",
      badge: "Acessórios",
    },
  ];

  const item = itens.find((i) => i.id === id);

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-wrapper">
        <div className="detalhes-container">
          {item ? (
            <>
              <img
                src={item.imagem}
                alt={item.titulo}
                className="detalhes-imagem"
              />
              <div className="detalhes-info">
                <h2>{item.titulo}</h2>
                <p>Publicado em {item.data}</p>
                <p className="detalhes-desc">{item.desc}</p>
                <p className="">Anunciante: {item.nome}</p>
                <p className="detalhes-local">📍 {item.local}</p>
                <span className="detalhes-badge">{item.badge}</span>

                <button className="detalhes-botao" onClick={() => setIsOpen(!isOpen)}>
                  <MessageCircleMoreIcon size={20} /> Abrir chat!
                </button>
              </div>
            </>
          ) : (
            <p>Item não encontrado!</p>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <span className="chat-icon">💬</span>
            <span className="chat-title">Chat com {item.nome}</span>
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
