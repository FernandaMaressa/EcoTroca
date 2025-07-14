import React from "react";
import { MapPin } from "lucide-react";
import "./CardItem.css";

export default function CardItem({ imagem, titulo, desc, local, badge }) {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img src={imagem} alt="Imagem do Produto" />
      </div>
      <div className="card-content">
        <h3>{titulo}</h3>
        <p className="card-desc">{desc}</p>
        <p className="card-local">
          <MapPin width={20} /> {local}
        </p>
        <p className="card-badge">{badge}</p>
        <a href="" className="card-button">Ver detalhes</a>
      </div>
    </div>
  );
}
