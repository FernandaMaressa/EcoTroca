import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export default function CardItem({ id, imagem, titulo, desc, local, badge }) {
  const isBase64 = imagem?.startsWith("data:image");
  return (
    <div className="card-item" key={id}>
      <div className="card-image-container">
        <img src={isBase64 ? imagem : imagem || "https://via.placeholder.com/150"} alt={titulo} />
      </div>
      <div className="card-content">
        <h3>{titulo}</h3>
        <p className="card-desc">{desc}</p>
        <p className="card-local">
          <MapPin width={20} /> {local}
        </p>
        {badge && <span className="badge">{badge}</span>}
        <Link to={`/detalhes/${id}`} className="card-button">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
