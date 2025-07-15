import React from "react";
import "./Sobre.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Sobre() {
  return (
    <div className="sobre-page">
      <NavBar />
      <section className="sobre-mission">
        <div className="text-mission">
          <div className="bloco-icone">
            <div className="circulo-icone">
                <svg className="icone" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
          </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-recycle h-8 w-8 text-emerald-600"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
                </div>
                <h3>Sustentabilidade</h3>
                <p>Promovemos o reuso e a economia circular, reduzindo o desperdício e o impacto ambiental do consumo.</p>
              </div>
            </div>
            <div className="card-2">
              <div className="bloco-card-2">
                <div className="icone-card-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-emerald-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Comunidade</h3>
                <p>Construímos uma rede de pessoas que compartilham valores similares e acreditam no poder da colaboração.</p>
              </div>
            </div>
            <div className="card-3">
              <div className="bloco-card-3">
                <div className="icone-card-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-8 w-8 text-emerald-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </div>
                <h3>Confiança</h3>
                <p>Criamos um ambiente seguro e transparente onde as trocas acontecem com base na confiança mútua.</p>
              </div>
            </div>
          </div>
        </div>
      </section>     
      <Footer />
    </div>
  );
}
