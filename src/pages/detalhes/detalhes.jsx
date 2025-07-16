import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Detalhes.css";

import img1 from "../../assets/batman.png";
import img2 from "../../assets/capacete.png";
import img3 from "../../assets/CarroBatman.png";

export default function Detalhes() {
  const { id } = useParams();
  
  const itens = [
    {
      id: "1",
      imagem: img1,
      titulo: "Boneco",
      desc: "Boneco do Batman em bom estado.",
      local: "Fortaleza-CE",
      badge: "Brinquedo",
    },
    {
      id: "2",
      imagem: img2,
      titulo: "Capacete",
      desc: "Seminovo disponível para troca.",
      local: "Fortaleza-CE",
      badge: "Acessórios",
    },
    {
      id: "3",
      imagem: img3,
      titulo: "Carro Batman",
      desc: "Carrinho de coleção do Batman.",
      local: "Iguatu-CE",
      badge: "Brinquedo",
    },
    {
      id: "4",
      imagem: "https://cdn.pixabay.com/photo/2018/01/05/04/27/object-3062127_1280.jpg",
      titulo: "Flores",
      desc: "Decoração de mesa com flores de plástico, em bom estado.",
      local: "Fortaleza-CE",
      badge: "Flores",
    },
    {
      id: "5",
      imagem: "https://cdn.pixabay.com/photo/2017/11/20/05/39/object-2964498_960_720.jpg",
      titulo: "Bonecos Artesanais",
      desc: "Itens manuais decorativos, feitos com carinho.",
      local: "Fortaleza-CE",
      badge: "Decoração",
    },
    {
      id: "6",
      imagem: "https://cdn.pixabay.com/photo/2017/08/07/23/55/still-2609350_1280.jpg",
      titulo: "Relógio",
      desc: "Possui configuração de alarme e voz anunciando a hora.",
      local: "Fortaleza-CE",
      badge: "Utilitários",
    },
    {
      id: "7",
      imagem: "https://cdn.pixabay.com/photo/2017/08/07/20/39/technology-2607623_1280.jpg",
      titulo: "Fones de ouvido",
      desc: "Item usado por 2 meses, funciona perfeitamente.",
      local: "Fortaleza-CE",
      badge: "Acessórios",
    },
  ];
  
  const item = itens.find((i) => i.id === id);

  return (
    <div>
      <NavBar />
      <div className="detalhes-container">
        {item ? (
          <>
            <img src={item.imagem} alt={item.titulo} className="detalhes-imagem" />
            <div className="detalhes-info">
              <h2>{item.titulo}</h2>
              <p className="detalhes-desc">{item.desc}</p>
              <p className="detalhes-local">📍 {item.local}</p>
              <span className="detalhes-badge">{item.badge}</span>
            </div>
          </>
        ) : (
          <p>Item não encontrado!</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
