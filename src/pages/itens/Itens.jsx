import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Itens.css";
import { Search } from "lucide-react";
import CardItem from "../../components/CardItem";

export default function Itens() {
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
          />
          <Search />
        </div>
        <section className="section-card">
          <p>
            <span>x</span> itens encontrados
          </p>
          <div className="container-cards">
            <CardItem
              imagem="https://cdn.pixabay.com/photo/2018/01/05/04/27/object-3062127_1280.jpg"
              titulo="Flores"
              desc="Item decorativo"
              local="Fortaleza-CE"
              badge="Flores"
            />
            <CardItem
              imagem="https://cdn.pixabay.com/photo/2017/11/20/05/39/object-2964498_960_720.jpg"
              titulo="Bonecos Artesanais"
              desc="Itens manuais decorativos"
              local="Fortaleza-CE"
              badge="Decoração"
            />
            <CardItem
              imagem="https://cdn.pixabay.com/photo/2017/08/07/23/55/still-2609350_1280.jpg"
              titulo="Relógio"
              desc="Item usado"
              local="Fortaleza-CE"
              badge="utilitários"
            />
            <CardItem
              imagem="https://cdn.pixabay.com/photo/2017/08/07/20/39/technology-2607623_1280.jpg"
              titulo="Fones de ouvido"
              desc="Item novo"
              local="Fortaleza-CE"
              badge="Acessórios"
            />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
