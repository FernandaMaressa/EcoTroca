import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Search } from "lucide-react";

export default function Itens() {
  return (
    <section>
      <NavBar />
      <div>
        <h2>Explorar itens</h2>
        <p>Encontre itens incríveis para trocar</p>
      </div>
      <div>
        <input type="text" name="buscarItem" id="buscarItem" />
      </div>
      <section>lista de itens</section>
      <Footer />
    </section>
  );
}
