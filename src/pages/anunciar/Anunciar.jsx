import React, { useState } from "react";
import "./Anunciar.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Anunciar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item anunciado com sucesso!");
  };

  return (
    <div>
      <NavBar />
      <div className="anunciar-container">
        <h1>Anunciar Novo Item</h1>
        <form onSubmit={handleSubmit}>
          <label>Título do Item</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

          <label>Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Roupas">Roupas</option>
            <option value="Livros">Livros</option>
            <option value="Móveis">Móveis</option>
          </select>

          <label>Cidade</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />

          <button type="submit">Publicar Item</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
