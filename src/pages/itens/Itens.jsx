import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Itens.css";
import { Search } from "lucide-react";
import CardItem from "../../components/CardItem";
import itemService from "../../services/itemService";


export default function Itens() {

  const [itens, setItens] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const carregarItens = async () => {
      try {
        const dados = await itemService.buscarDados();
        setItens(dados);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      }
    };

    carregarItens();
  }, []);

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );


  return (
    <section>
      <NavBar />
      <section className="container-lista-itens">
        <div>
          <h2>Explorar itens</h2>
          <p>Encontre itens incríveis para trocar</p>
        </div>
        <div className="container-input-search">
          <input
            type="text"
            name="buscarItem"
            id="buscarItem"
            placeholder="O que você está procurando?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <Search />
        </div>
        <section className="section-card">
          <p>
            <span>{itensFiltrados.length}</span> itens encontrados
          </p>
          <div className="container-cards">
            <div className="cards-itens">
            {itensFiltrados.map((item) => (
            <CardItem
              key={item.id}
              id={item.id}
              imagem={item.imagem}  
              titulo={item.nome}
              desc={item.descricao}
              local={`${item.cidade}, ${item.estado}`}
              badge={item.categoria?.nome || "Sem categoria"}
            />))}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
