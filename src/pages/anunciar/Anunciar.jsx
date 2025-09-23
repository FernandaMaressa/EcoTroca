import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Anunciar.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import itemService from "../../services/itemService";
import localizacaoService from "../../services/localizacaoService";
import categoriaService from "../../services/categoriaService";

export default function Anunciar() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoriaId: "",
    estado: "",
    cidade: "",
    imagem: "",
    usuarioId: null,
  });
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchInicialData = async () => {

      const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
      const userDataString = localStorage.getItem(import.meta.env.VITE_USER_KEY);

      if (!token || !userDataString) {
        navigate("/login");
        return;
      }
      
      try {
       
        const usuario = JSON.parse(userDataString);
        setForm(prevForm => ({ ...prevForm, usuarioId: usuario.id }));

        const categoriasData = await categoriaService.buscarCategorias();
        setCategorias(categoriasData);

        const estadosData = await localizacaoService.buscarEstados();
        setEstados(estadosData);
      } catch (error) {
        console.error("Erro ao carregar dados iniciais:", error);
        setError("Falha ao carregar dados. Tente novamente.");
      }
    };
    fetchInicialData();
  }, [navigate]);

  useEffect(() => {
    if (form.estado) {
      const fetchCidades = async () => {
        try {
          const cidadesData = await localizacaoService.buscarCidadesPorEstado(form.estado);
          setCidades(cidadesData);
        } catch (error) {
          setError(`Falha ao carregar cidades para ${form.estado}. Tente novamente.`);
          setCidades([]);
        }
      };
      fetchCidades();
    } else {
      setCidades([]);
    }
  }, [form.estado]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, imagem: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.usuarioId) {
        setError("Erro de autenticação. Tente fazer login novamente.");
        return;
    }

    const payload = {
      ...form,
    };

    try {
      setSaving(true);
      await itemService.addNovoItem(payload);
      alert("Item cadastrado com sucesso!");
      navigate("/perfil");
    } catch (error) {
      setError(error.response?.data?.error || "Falha ao cadastrar item. Tente novamente.");
    } finally {
      setSaving(false);
    }
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
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Ex: Televisão LG"
              required
            />
            <label>Descrição *</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              placeholder="Descreva as condições, características, etc."
              required
            />
            <label>Categoria *</label>
            <select
              name="categoriaId"
              value={form.categoriaId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
            <label>Estado</label>
            <select
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
            >
              <option value="">Selecione seu estado</option>
              {estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
            <label>Cidade</label>
            <select
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
              disabled={!form.estado}
            >
              <option value="">Selecione sua cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade.id} value={cidade.nome}>
                  {cidade.nome}
                </option>
              ))}
            </select>
            <div className="file-input-container">
              <label htmlFor="file-upload" className="custom-file-upload">
                Adicionar Foto do Item
              </label>
              <input
                id="file-upload"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {form.imagem && (
                <img src={form.imagem} alt="Preview" width="120" />
              )}
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={saving}>
              {saving ? 'Cadastrando...' : 'Cadastrar Item'}
            </button>
          </form>
          <div className="dicas-box">
            <h4>Dicas para um bom cadastro:</h4>
            <ul>
              <li>Use fotos claras e bem iluminadas</li>
              <li>Seja honesto sobre o estado do item</li>
              <li>Inclua detalhes importantes na descrição</li>
              <li>Escolha a categoria correta</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}