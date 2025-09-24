import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import authService from "../../services/authService";
import localizacaoService from "../../services/localizacaoService";
import usuarioService from "../../services/usuarioService";
import { Upload } from "lucide-react";

const toInputDate = (value) => {
  if (!value) return "";
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value))
    return value;

  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";

  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const toIsoDateOnly = (yyyyMmDd) => {
  if (!yyyyMmDd) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(yyyyMmDd)) return null;
  return `${yyyyMmDd}T00:00:00.000Z`;
};

function Cadastro() {
  const navigate = useNavigate();
  const location = useLocation();

  // Detecta se veio para edição
  const editMode = location.state?.mode === "edit";

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
    estado: "",
    cidade: "",
    dataNasc: "",
    imgPerfil: "",
  });

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Carrega estados
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

  // Carrega cidades quando muda o estado
  useEffect(() => {
    if (form.estado) {
      const fetchCidades = async () => {
        try {
          const cidadesData = await localizacaoService.buscarCidadesPorEstado(
            form.estado
          );
          setCidades(cidadesData);
        } catch (error) {
          setError(
            `Falha ao carregar cidades para ${form.estado}. Tente novamente.`
          );
          setCidades([]);
        }
      };
      fetchCidades();
    } else {
      setCidades([]);
    }
  }, [form.estado]);

  // Prefill no modo edição
  useEffect(() => {
    const prefill = async () => {
      if (!editMode) return;
      try {
        const raw = localStorage.getItem(import.meta.env.VITE_USER_KEY);
        const usuarioLocal = raw ? JSON.parse(raw) : null;
        if (!usuarioLocal?.id) {
          setError("Sessão expirada. Faça login novamente.");
          return navigate("/login");
        }

        const dados = await usuarioService.buscarDadosUsuario(usuarioLocal.id);
        setForm((prev) => ({
          ...prev,
          nome: dados?.nome || "",
          email: dados?.email || "",
          estado: dados?.estado || "",
          cidade: dados?.cidade || "",
          dataNasc: toInputDate(dados?.dataNasc),
          imgPerfil: dados?.imgPerfil || "",
          senha: "",
          confirmaSenha: "",
        }));
      } catch (e) {
        console.error("Falha ao carregar seus dados:", e);
        setError("Não foi possível carregar seus dados para edição.");
      }
    };
    prefill();
  }, [editMode, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, imgPerfil: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const validate = () => {
    if (
      !form.nome ||
      !form.email ||
      !form.estado ||
      !form.cidade ||
      !form.dataNasc
    ) {
      return "Por favor, preencha todos os campos obrigatórios.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Por favor, insira um email válido.";
    }
    if (form.dataNasc && !/^\d{4}-\d{2}-\d{2}$/.test(form.dataNasc)) {
      return "Data de nascimento inválida. Use o formato YYYY-MM-DD.";
    }

    if (!editMode) {
      if (!form.senha || !form.confirmaSenha) {
        return "Informe a senha e a confirmação.";
      }
      if (form.senha.length < 6) {
        return "A senha deve ter no mínimo 6 caracteres.";
      }
      if (form.senha !== form.confirmaSenha) {
        return "As senhas não coincidem.";
      }
    } else {
      if (form.senha || form.confirmaSenha) {
        if (form.senha.length < 6) {
          return "A nova senha deve ter no mínimo 6 caracteres.";
        }
        if (form.senha !== form.confirmaSenha) {
          return "As senhas não coincidem.";
        }
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validation = validate();
    if (validation) return setError(validation);

    try {
      setSaving(true);

      const payloadBase = {
        nome: form.nome,
        email: form.email,
        cidade: form.cidade,
        estado: form.estado,
        dataNasc: toIsoDateOnly(form.dataNasc), // <-- ISO válido para Prisma
        imgPerfil: form.imgPerfil,
      };

      if (!editMode) {
        // CRIAR
        const payload = { ...payloadBase, senha: form.senha };
        await authService.RegistrarUsuario(payload);
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } else {
        // EDITAR (senha opcional)
        const raw = localStorage.getItem(import.meta.env.VITE_USER_KEY);
        const usuarioLocal = raw ? JSON.parse(raw) : null;
        if (!usuarioLocal?.id) {
          setError("Sessão expirada. Faça login novamente.");
          return navigate("/login");
        }

        const payloadEdit =
          form.senha && form.senha.length >= 6
            ? { ...payloadBase, senha: form.senha }
            : payloadBase;

        const atualizado = await usuarioService.editarDadosUsuario(
          usuarioLocal.id,
          payloadEdit
        );

        try {
          localStorage.setItem(
            import.meta.env.VITE_USER_KEY,
            JSON.stringify({ ...usuarioLocal, ...atualizado })
          );
        } catch {}

        alert("Dados atualizados com sucesso!");
        navigate("/perfil");
      }
    } catch (error) {
      setError(
        error?.response?.data?.error ||
          (editMode
            ? "Falha ao atualizar usuário."
            : "Falha ao criar usuário. Tente novamente.")
      );
    } finally {
      setSaving(false);
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
          <h2>{editMode ? "Editar Dados" : "Criar Conta"}</h2>
          <p>
            {editMode
              ? "Atualize suas informações"
              : "Junte-se a nossa comunidade sustentavel"}
          </p>

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
                  disabled={editMode}
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
              </div>

              <div>
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
              </div>

              {!editMode ? (
                <>
                  <div>
                    <label>Senha</label>
                    <input
                      type="password"
                      placeholder="*******"
                      name="senha"
                      value={form.senha}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Confirme a Senha</label>
                    <input
                      type="password"
                      placeholder="*******"
                      name="confirmaSenha"
                      value={form.confirmaSenha}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label>Nova Senha (opcional)</label>
                    <input
                      type="password"
                      placeholder="Deixe em branco para manter"
                      name="senha"
                      value={form.senha}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Confirme a Nova Senha</label>
                    <input
                      type="password"
                      placeholder="Repita a nova senha"
                      name="confirmaSenha"
                      value={form.confirmaSenha}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="file-input-container">
                <label htmlFor="file-upload" className="custom-file-upload">
                  Adicionar Foto de Perfil
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="imgPerfil"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label htmlFor="file-upload" id="upload">
                  Selecionar <Upload />
                </label>
                {form.imgPerfil && (
                  <img
                    src={form.imgPerfil}
                    alt="Preview"
                    width="120"
                    id="imgPerfil"
                  />
                )}
              </div>

              <button className="cadastrobtt" type="submit" disabled={saving}>
                {saving
                  ? editMode
                    ? "Salvando..."
                    : "Cadastrando..."
                  : editMode
                  ? "Salvar alterações"
                  : "Cadastrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
