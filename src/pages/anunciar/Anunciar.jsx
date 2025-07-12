import React, { useState } from "react";
import "./Anunciar.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Anunciar() {
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    estado: "",
    cidade: "",
    imagemUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item cadastrado com sucesso!");
  };

  return (
    <div>
      <NavBar />
      <div className="anunciar-bg">
        <div className="anunciar-box">
          <h1>Cadastrar Novo Item</h1>
          <p className="subtitulo">
            Adicione um item que você gostaria de trocar
          </p>
          <form onSubmit={handleSubmit}>
            <label>Nome do Item *</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ex: Televisão LG"
              required
            />

            <label>Descrição *</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              placeholder="Descreva o estado do item, tempo de uso, detalhes importantes..."
              required
            />

            <label>Categoria *</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Roupas">Roupas</option>
              <option value="Livros">Livros</option>
              <option value="Móveis">Móveis</option>
            </select>

            <label>Estado *</label>
            <select
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
            >
              <option value="">Selecione seu estado</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              <option value="RS">Rio Grande do Sul</option>
            </select>

            <label>Cidade *</label>
            <select
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            >
              <option value="">Selecione sua cidade</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Porto Alegre">Porto Alegre</option>
            </select>

            <label>URL da imagem</label>
            <input
              type="url"
              name="imagemUrl"
              value={form.imagemUrl}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
            />
            <span className="imagem-dica">Cole o link de uma imagem do seu item</span>

            <button type="submit">Cadastrar Item</button>
          </form>

          <div className="dicas-box">
            <h4>Dicas para um bom cadastro:</h4>
            <ul>
              <li>Use fotos claras e bem iluminadas</li>
              <li>Seja honesto sobre o estado do item</li>
              <li>Inclua detalhes importantes na descrição</li>
              <li>Escolha a categoria correta para facilitar a busca</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
