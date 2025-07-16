import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export default function CardItem({ id, imagem, titulo, desc, local, badge }) {
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
        <Link to={`/detalhes/${id}`} className="card-button">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
