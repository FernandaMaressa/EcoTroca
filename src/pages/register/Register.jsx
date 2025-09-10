import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import usuarioService from "../../services/usuarioService";
import localizacaoService from "../../services/localizacaoService";

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ nome: '', email: '', password: '', state: '', city: '', dataNasc: '' });
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.nome) {
      return setError("Nome é obrigatório");
    };
    if (!form.email) {
      return setError("Email é obrigatório");
    };

    /*if(form.dataNasc && !/^\d{4}-\d{2}-\d{2}$/.test(form.dataNasc)){
     return setError('Data de nascimento inválida')
   }*/

    const payload = {
      nome: form.nome,
      email: form.email,
      senhaHash: form.password,
      cidade: form.city,
      estado: form.state
      //dataNasc: form.dataNasc ? `${form.dataNasc}T00:00:00.000Z` : null
    }

    try {
      setSaving(true)

      await usuarioService.addNovoUsuario(payload);
      navigate("/login");
    } catch (error) {
      setError('Falha ao criar usuario')
    } finally {
      setSaving(false)
    }
  };

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
            {error && <p>{error}</p>}
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
                <label>Estado</label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione seu estado</option>
                  {estados.map((estado) =>(
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
                  {cidades.map((cidade) =>(
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
              <button className="cadastrobtt" type="submit" disabled={saving}>{saving ? 'Cadastrando...' : 'Cadastrar'}</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
