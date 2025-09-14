import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import usuarioService from "../../services/usuarioService";
import localizacaoService from "../../services/localizacaoService";

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: '',
    dataNasc: ''
  });

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const estadosData = await localizacaoService.buscarEstados();
        setEstados(estadosData);
      } catch (error) {
        setError("Falha ao carregar estados. Tente novamente.");
      }
    };
    fetchEstados();
  }, []);

  useEffect(() => {
    if (form.state) {
      const fetchCidades = async () => {
        try {
          const cidadesData = await localizacaoService.buscarCidadesPorEstado(form.state);
          setCidades(cidadesData);
        } catch (err) {
          setError(`Falha ao carregar cidades para ${form.state}. Tente novamente.`);
          setCidades([]);
        }
      };
      fetchCidades();
    } else {
      setCidades([]);
    }
  }, [form.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        setImageBase64(reader.result);  
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setImageBase64(null);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!form.nome || !form.email || !form.password || !form.confirmPassword || !form.state || !form.city || !form.dataNasc) {
      return setError("Por favor, preencha todos os campos obrigatórios.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return setError("Por favor, insira um email válido.");
    }
    if (form.password.length < 6) {
      return setError("A senha deve ter no mínimo 6 caracteres.");
    }
    if (form.password !== form.confirmPassword) {
      return setError("As senhas não coincidem.");
    }
    if (form.dataNasc && !/^\d{4}-\d{2}-\d{2}$/.test(form.dataNasc)) {
        return setError("Data de nascimento inválida. Use o formato YYYY-MM-DD.");
    }

    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.password, 
      cidade: form.city,
      estado: form.state,
      dataNasc: form.dataNasc,
      imgPerfilBase64: imageBase64 
    };

    try {
      setSaving(true);
      await usuarioService.addNovoUsuario(payload);
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.error || 'Falha ao criar usuário. Tente novamente.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <div className="registerP">
        <div className="registerLogo">
          <img className="logo" src={logo} alt="Logo da EcoTroca" />
          <h1>EcoTroca</h1>
        </div>
        <div className="registerInfo">
          <h2>Criar Conta</h2>
          <p>Junte-se a nossa comunidade sustentavel</p>

          <div className="registerForms">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  name="dataNasc"
                  value={form.dataNasc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Estado</label>
                <select
                  name="state"
                  value={form.state}
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
              </div>
              <div>
                <label>Cidade</label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  disabled={!form.state}
                >
                  <option value="">Selecione sua cidade</option>
                  {cidades.map((cidade) => (
                    <option key={cidade.id} value={cidade.nome}>
                      {cidade.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="*******"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Confirme a Senha</label>
                <input
                  type="password"
                  placeholder="*******"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="file-input-container">
                <label htmlFor="file-upload" className="custom-file-upload">
                  Adicionar Foto de Perfil
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Pré-visualização da imagem"
                    className="image-preview"
                  />
                )}
              </div>
              <button className="cadastrobtt" type="submit" disabled={saving}>
                {saving ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;