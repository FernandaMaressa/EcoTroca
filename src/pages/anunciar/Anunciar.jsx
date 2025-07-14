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
              <option value="">Selecione a categoria</option>
              <optgroup label="Eletrônicos">
                <option value="Celulares e Smartphones">Eletrônicos - Celulares e Smartphones</option>
                <option value="Computadores e Notebooks">Eletrônicos - Computadores e Notebooks</option>
                <option value="Acessorios">Eletrônicos - Acessórios</option>
                <option value="TVs, DVDs e Home Theater">Eletrônicos - TVs, DVDs e Home Theater</option>
                <option value="Games e Consoles">Eletrônicos - Games e Consoles</option>
              </optgroup>

              <optgroup label="Eletrodomésticos">
                <option value="Geladeira / Freezer">Eletrodomésticos - Geladeira / Freezer</option>
                <option value="Fogao / Forno">Eletrodomésticos - Fogão / Forno</option>
                <option value="Micro-ondas">Eletrodomésticos - Micro-ondas</option>
                <option value="Maquina de Lavar">Eletrodomésticos - Máquina de Lavar</option>
                <option value="Ventilador / Ar-condicionado">Eletrodomésticos - Ventilador / Ar-condicionado</option>
              </optgroup>

              <optgroup label="Móveis">
                <option value="Sala">Móveis - Sala</option>
                <option value="Quarto">Móveis - Quarto</option>
                <option value="Cozinha">Móveis - Cozinha</option>
                <option value="Escritorio">Móveis - Escritório</option>
              </optgroup>

              <optgroup label="Roupas e Calçados">
                <option value="Roupas Femininas">Roupas e Calçados - Femininas</option>
                <option value="Roupas Masculinas">Roupas e Calçados - Masculinas</option>
                <option value="Roupas Infantis">Roupas e Calçados - Infantis</option>
                <option value="Bolsas e Acessorios">Bolsas e Acessórios</option>
              </optgroup>

              <optgroup label="Livros e Papelaria">
                <option value="Livros escolares">Livros - Escolares</option>
                <option value="Livros de literatura">Livros - Literatura</option>
                <option value="Revistas">Livros - Revistas</option>
                <option value="Material de escritorio">Papelaria - Material de escritório</option>
                <option value="Cadernos e agendas">Papelaria - Cadernos e agendas</option>
              </optgroup>

              <optgroup label="Esporte e Lazer">
                <option value="Bicicletas">Esporte - Bicicletas</option>
                <option value="Equipamentos esportivos">Esporte - Equipamentos esportivos</option>
                <option value="Instrumentos musicais">Lazer - Instrumentos musicais</option>
                <option value="Jogos de tabuleiro">Lazer - Jogos de tabuleiro</option>
                <option value="Brinquedos">Lazer - Brinquedos</option>
              </optgroup>

              <optgroup label="Casa e Jardim">
                <option value="Decoracao">Casa - Decoração</option>
                <option value="Ferramentas">Casa - Ferramentas</option>
                <option value="Utensilios domesticos">Casa - Utensílios domésticos</option>
                <option value="Plantas e vasos">Jardim - Plantas e vasos</option>
                <option value="Itens de jardinagem">Jardim - Itens de jardinagem</option>
              </optgroup>

              <optgroup label="Bebês e Crianças">
                <option value="Carrinhos e cadeirinhas">Bebês e Crianças - Carrinhos e cadeirinhas</option>
                <option value="Roupas e calçados infantis">Bebês e Crianças - Roupas e calçados</option>
                <option value="Brinquedos educativos">Bebês e Crianças - Brinquedos</option>
                <option value="Bercos e moveis infantis">Bebês e Crianças - Berços e móveis infantis</option>
              </optgroup>

              <optgroup label="Veículos e Peças">
                <option value="Motos">Motos</option>
                <option value="Pecas e acessorios automotivos">Peças e acessórios automotivos</option>
              </optgroup>

              <optgroup label="Beleza e Cuidados Pessoais">
                <option value="Maquiagem">Maquiagem</option>
                <option value="Produtos de higiene">Produtos de higiene</option>
                <option value="Cosmeticos">Cosméticos</option>
                <option value="Perfumes">Perfumes</option>
              </optgroup>

              <optgroup label="Pets">
                <option value="Racoes">Pets - Rações</option>
                <option value="Acessorios (coleiras, brinquedos)">Pets - Acessórios (coleiras, brinquedos)</option>
                <option value="Casinhas e camas">Pets - Casinhas e camas</option>
                <option value="Roupas para pets">Pets - Roupas</option>
              </optgroup>

              <optgroup label="Outros">
                <option value="Itens Colecionaveis">Itens Colecionáveis</option>
                <option value="Antiguidades">Antiguidades</option>
                <option value="Artesanato">Artesanato</option>
                <option value="Diversos">Diversos</option>
              </optgroup>
            </select>

            <label>Estado *</label>
            <select
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
            >
              <option value="">Selecione seu estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>

            <label>Cidade *</label>
            <select
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            >
              <option value="">Selecione sua cidade</option>
              <option value="Anápolis (GO)">Anápolis (GO)</option>
              <option value="Aracaju (SE)">Aracaju (SE)</option>
              <option value="Barueri (SP)">Barueri (SP)</option>
              <option value="Belém (PA)">Belém (PA)</option>
              <option value="Belford Roxo (RJ)">Belford Roxo (RJ)</option>
              <option value="Belo Horizonte (MG)">Belo Horizonte (MG)</option>
              <option value="Blumenau (SC)">Blumenau (SC)</option>
              <option value="Boa Vista (RR)">Boa Vista (RR)</option>
              <option value="Brasília (DF)">Brasília (DF)</option>
              <option value="Campina Grande (PB)">Campina Grande (PB)</option>
              <option value="Campinas (SP)">Campinas (SP)</option>
              <option value="Campo Grande (MS)">Campo Grande (MS)</option>
              <option value="Campos dos Goytacazes (RJ)">Campos dos Goytacazes (RJ)</option>
              <option value="Canoas (RS)">Canoas (RS)</option>
              <option value="Carapicuíba (SP)">Carapicuíba (SP)</option>
              <option value="Cariacica (ES)">Cariacica (ES)</option>
              <option value="Caruaru (PE)">Caruaru (PE)</option>
              <option value="Caucaia (CE)">Caucaia (CE)</option>
              <option value="Caxias do Sul (RS)">Caxias do Sul (RS)</option>
              <option value="Contagem (MG)">Contagem (MG)</option>
              <option value="Cuiabá (MT)">Cuiabá (MT)</option>
              <option value="Curitiba (PR)">Curitiba (PR)</option>
              <option value="Diadema (SP)">Diadema (SP)</option>
              <option value="Duque de Caxias (RJ)">Duque de Caxias (RJ)</option>
              <option value="Feira de Santana (BA)">Feira de Santana (BA)</option>
              <option value="Florianópolis (SC)">Florianópolis (SC)</option>
              <option value="Fortaleza (CE)">Fortaleza (CE)</option>
              <option value="Foz do Iguaçu (PR)">Foz do Iguaçu (PR)</option>
              <option value="Goiânia (GO)">Goiânia (GO)</option>
              <option value="Guarulhos (SP)">Guarulhos (SP)</option>
              <option value="Ilhéus (BA)">Ilhéus (BA)</option>
              <option value="Imperatriz (MA)">Imperatriz (MA)</option>
              <option value="Ipatinga (MG)">Ipatinga (MG)</option>
              <option value="Itajaí (SC)">Itajaí (SC)</option>
              <option value="João Pessoa (PB)">João Pessoa (PB)</option>
              <option value="Joinville (SC)">Joinville (SC)</option>
              <option value="Jundiaí (SP)">Jundiaí (SP)</option>
              <option value="Juazeiro do Norte (CE)">Juazeiro do Norte (CE)</option>
              <option value="Juiz de Fora (MG)">Juiz de Fora (MG)</option>
              <option value="Lauro de Freitas (BA)">Lauro de Freitas (BA)</option>
              <option value="Limeira (SP)">Limeira (SP)</option>
              <option value="Macapá (AP)">Macapá (AP)</option>
              <option value="Maceió (AL)">Maceió (AL)</option>
              <option value="Manaus (AM)">Manaus (AM)</option>
              <option value="Maracanaú (CE)">Maracanaú (CE)</option>
              <option value="Marília (SP)">Marília (SP)</option>
              <option value="Maringá (PR)">Maringá (PR)</option>
              <option value="Mauá (SP)">Mauá (SP)</option>
              <option value="Montes Claros (MG)">Montes Claros (MG)</option>
              <option value="Mossoró (RN)">Mossoró (RN)</option>
              <option value="Natal (RN)">Natal (RN)</option>
              <option value="Niterói (RJ)">Niterói (RJ)</option>
              <option value="Nova Iguaçu (RJ)">Nova Iguaçu (RJ)</option>
              <option value="Olinda (PE)">Olinda (PE)</option>
              <option value="Palmas (TO)">Palmas (TO)</option>
              <option value="Parauapebas (PA)">Parauapebas (PA)</option>
              <option value="Paulista (PE)">Paulista (PE)</option>
              <option value="Pelotas (RS)">Pelotas (RS)</option>
              <option value="Petrolina (PE)">Petrolina (PE)</option>
              <option value="Porto Alegre (RS)">Porto Alegre (RS)</option>
              <option value="Porto Velho (RO)">Porto Velho (RO)</option>
              <option value="Recife (PE)">Recife (PE)</option>
              <option value="Ribeirão Preto (SP)">Ribeirão Preto (SP)</option>
              <option value="Rio Branco (AC)">Rio Branco (AC)</option>
              <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
              <option value="Salvador (BA)">Salvador (BA)</option>
              <option value="Santa Maria (RS)">Santa Maria (RS)</option>
              <option value="Santarém (PA)">Santarém (PA)</option>
              <option value="Santo André (SP)">Santo André (SP)</option>
              <option value="Santos (SP)">Santos (SP)</option>
              <option value="São Bernardo do Campo (SP)">São Bernardo do Campo (SP)</option>
              <option value="São Gonçalo (RJ)">São Gonçalo (RJ)</option>
              <option value="São José do Rio Preto (SP)">São José do Rio Preto (SP)</option>
              <option value="São José dos Campos (SP)">São José dos Campos (SP)</option>
              <option value="São Luís (MA)">São Luís (MA)</option>
              <option value="São Paulo (SP)">São Paulo (SP)</option>
              <option value="Serra (ES)">Serra (ES)</option>
              <option value="Sete Lagoas (MG)">Sete Lagoas (MG)</option>
              <option value="Sobral (CE)">Sobral (CE)</option>
              <option value="Sorocaba (SP)">Sorocaba (SP)</option>
              <option value="Suzano (SP)">Suzano (SP)</option>
              <option value="Taguatinga (DF)">Taguatinga (DF)</option>
              <option value="Teresina (PI)">Teresina (PI)</option>
              <option value="Uberaba (MG)">Uberaba (MG)</option>
              <option value="Uberlândia (MG)">Uberlândia (MG)</option>
              <option value="Várzea Grande (MT)">Várzea Grande (MT)</option>
              <option value="Vila Velha (ES)">Vila Velha (ES)</option>
              <option value="Vitória (ES)">Vitória (ES)</option>
              <option value="Vitória da Conquista (BA)">Vitória da Conquista (BA)</option>
              <option value="Volta Redonda (RJ)">Volta Redonda (RJ)</option>
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
