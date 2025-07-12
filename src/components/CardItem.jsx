import React from "react";
import { MapPin } from "lucide-react";

export default function CardItem({ imagem, titulo, desc, local, badge }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          maxWidth: 210,
          height: 200,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={imagem}
          alt="Imagem do Produto"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <h3>{titulo}</h3>
        <p style={{ paddingTop: "5px" }}>{desc}</p>
        <p style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <MapPin width={20} /> {local}
        </p>
        <p
          style={{
            color: "#43b3a0",
            backgroundColor: "#D1FAE5",
            padding: "2px 3px",
            borderRadius: 8,
            textAlign: "center",
            width: "100px",
          }}
        >
          {badge}
        </p>
        <a
          href=""
          style={{
            textDecoration: "none",
            backgroundColor: "#43b3a0",
            color: "#fff",
            padding: "0.5rem 1.7rem",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          Ver detalhes
        </a>
      </div>
    </div>
  );
}
