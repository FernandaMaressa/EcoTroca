import React from "react";
import "./Sobre.css";
import logo from "../../assets/logo.svg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Bold } from "lucide-react";

export default function Sobre() {
  return (
    <div className="sobre-page">
      <NavBar />
      <section className="sobre-mission">
        <img src={logo} alt="EcoTroca" width={70} />
        <div className="text-mission">
          <h1>Nossa Missão</h1>
          <p>Acreditamos que cada item tem uma segunda chance de ser útil. A EcoTroca foi criada para conectar pessoas e promover um consumo mais consciente através de trocas sustentáveis.</p>
        </div> 
      </section>  
      <section className="sobre-valores">
        <div className="bloco-valores">
          <h2>Nossos Valores</h2>
          <div className="grid-valores">
            <div className="card-1">
              <div className="bloco-card-1">
                <div className="icone-card-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-recycle h-8 w-8 text-emerald-600"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
                </div>
                <h3>Sustentabilidade</h3>
                <p>Promovemos o reuso e a economia circular, reduzindo o desperdício e o impacto ambiental do consumo.</p>
              </div>
            </div>
            <div className="card-2">
              <div className="bloco-card-2">
                <div className="icone-card-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-emerald-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Comunidade</h3>
                <p>Construímos uma rede de pessoas que compartilham valores similares e acreditam no poder da colaboração.</p>
              </div>
            </div>
            <div className="card-3">
              <div className="bloco-card-3">
                <div className="icone-card-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-8 w-8 text-emerald-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </div>
                <h3>Confiança</h3>
                <p>Criamos um ambiente seguro e transparente onde as trocas acontecem com base na confiança mútua.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sobre-historia">
        <div className="bloco-historia">
          <div className="bloco-texto-historia">
            <h2>Nossa História</h2>
            <div className="texto-historia">
              <p>A EcoTroca nasceu da observação de que muitos itens em perfeito estado de uso ficam guardados sem utilidade, enquanto outras pessoas procuram exatamente por esses mesmos itens. Percebemos uma oportunidade de conectar essas necessidades de forma sustentável.</p>
              <p>Em 2025, decidimos criar uma plataforma que fosse além de apenas facilitar trocas. Queríamos construir uma comunidade consciente, onde cada transação contribui para um mundo mais sustentável e colaborativo.</p>
              <p>Hoje, a EcoTroca conecta milhares de pessoas em todo o Brasil, promovendo não apenas trocas de itens, mas também a troca de experiências e a construção de relações baseadas na confiança e no respeito mútuo.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sobre-impacto">
        <div className="bloco-impacto">
          <h2>Nosso Impacto</h2>
          <div className="grid-impacto">
            <div className="dado-1">
              <div className="dado-1-numero">1,200+</div>
              <div className="dado-1-texto">Usuários ativos</div>
            </div>
            <div className="dado-2">
              <div className="dado-2-numero">3,500+</div>
              <div className="dado-1-texto">Trocas realizadas</div>
            </div>
            <div className="dado-3">
              <div className="dado-3-numero">850+</div>
              <div className="dado-1-texto">Itens disponíveis</div>
            </div>
            <div className="dado-4">
              <div className="dado-4-numero">15 ton</div>
              <div className="dado-1-texto">CO₂ economizado</div>
            </div>
          </div>
        </div>
      </section>     
      <Footer />
    </div>
  );
}
