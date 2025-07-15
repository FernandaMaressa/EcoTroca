import "./EditarPerfil.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function EditarPerfil() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/perfil");
  };

  return (
    <>
      <div className="registerP">
        {/* <Link to={"/"} className='voltarInicio'>← Voltar ao início</Link> */}
        <div className="registerLogo">
          <img className="logo" src={logo} alt="Logo da EcoTroca" />
          <h1>EcoTroca</h1>
        </div>
        <div className="registerInfo">
          <div className="registerInfo-title">
            <h2>Atualizar Perfil</h2>
            <p>Junte-se a nossa comunidade sustentavel</p>
          </div>

          <div className="registerForms">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome</label>
                <input
                  placeholder="Seu nome"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  placeholder="seu@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Estado</label>
                <select
                  name="estado"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
              </div>
              <div>
                <label>Cidade</label>
                <select
                  name="cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Selecione sua cidade</option>
                  <option value="Abadia de Goiás (GO)">
                    Abadia de Goiás (GO)
                  </option>
                  <option value="Abadia dos Dourados (MG)">
                    Abadia dos Dourados (MG)
                  </option>
                  <option value="Abadiânia (GO)">Abadiânia (GO)</option>
                  <option value="Abaeté (MG)">Abaeté (MG)</option>
                  <option value="Abaetetuba (PA)">Abaetetuba (PA)</option>
                  <option value="Abaiara (CE)">Abaiara (CE)</option>
                  <option value="Abaíra (BA)">Abaíra (BA)</option>
                  <option value="Abaré (BA)">Abaré (BA)</option>
                  <option value="Abatiá (PR)">Abatiá (PR)</option>
                  <option value="Abdon Batista (SC)">Abdon Batista (SC)</option>
                  <option value="Abel Figueiredo (PA)">
                    Abel Figueiredo (PA)
                  </option>
                  <option value="Abelardo Luz (SC)">Abelardo Luz (SC)</option>
                  <option value="Abre Campo (MG)">Abre Campo (MG)</option>
                  <option value="Abreu e Lima (PE)">Abreu e Lima (PE)</option>
                  <option value="Abreulândia (TO)">Abreulândia (TO)</option>
                  <option value="Acaiaca (MG)">Acaiaca (MG)</option>
                  <option value="Açailândia (MA)">Açailândia (MA)</option>
                  <option value="Acajutiba (BA)">Acajutiba (BA)</option>
                  <option value="Acará (PA)">Acará (PA)</option>
                  <option value="Acarape (CE)">Acarape (CE)</option>
                  <option value="Acaraú (CE)">Acaraú (CE)</option>
                  <option value="Acari (RN)">Acari (RN)</option>
                  <option value="Acauã (PI)">Acauã (PI)</option>
                  <option value="Aceguá (RS)">Aceguá (RS)</option>
                  <option value="Acopiara (CE)">Acopiara (CE)</option>
                  <option value="Acorizal (MT)">Acorizal (MT)</option>
                  <option value="Acrelândia (AC)">Acrelândia (AC)</option>
                  <option value="Acreúna (GO)">Acreúna (GO)</option>
                  <option value="Açu (RN)">Açu (RN)</option>
                  <option value="Açucena (MG)">Açucena (MG)</option>
                  <option value="Adamantina (SP)">Adamantina (SP)</option>
                  <option value="Adelândia (GO)">Adelândia (GO)</option>
                  <option value="Adolfo (SP)">Adolfo (SP)</option>
                  <option value="Adrianópolis (PR)">Adrianópolis (PR)</option>
                  <option value="Adustina (BA)">Adustina (BA)</option>
                  <option value="Afogados da Ingazeira (PE)">
                    Afogados da Ingazeira (PE)
                  </option>
                  <option value="Afonso Bezerra (RN)">
                    Afonso Bezerra (RN)
                  </option>
                  <option value="Afonso Cláudio (ES)">
                    Afonso Cláudio (ES)
                  </option>
                  <option value="Afonso Cunha (MA)">Afonso Cunha (MA)</option>
                  <option value="Afrânio (PE)">Afrânio (PE)</option>
                  <option value="Afuá (PA)">Afuá (PA)</option>
                  <option value="Agrestina (PE)">Agrestina (PE)</option>
                  <option value="Agricolândia (PI)">Agricolândia (PI)</option>
                  <option value="Agrolândia (SC)">Agrolândia (SC)</option>
                  <option value="Agronômica (SC)">Agronômica (SC)</option>
                  <option value="Água Azul do Norte (PA)">
                    Água Azul do Norte (PA)
                  </option>
                  <option value="Água Boa (MG)">Água Boa (MG)</option>
                  <option value="Água Boa (MT)">Água Boa (MT)</option>
                  <option value="Água Branca (PI)">Água Branca (PI)</option>
                  <option value="Água Branca (PB)">Água Branca (PB)</option>
                  <option value="Água Branca (AL)">Água Branca (AL)</option>
                  <option value="Água Clara (MS)">Água Clara (MS)</option>
                  <option value="Água Comprida (MG)">Água Comprida (MG)</option>
                  <option value="Água Doce (SC)">Água Doce (SC)</option>
                  <option value="Água Doce do Maranhão (MA)">
                    Água Doce do Maranhão (MA)
                  </option>
                  <option value="Água Doce do Norte (ES)">
                    Água Doce do Norte (ES)
                  </option>
                  <option value="Água Fria (BA)">Água Fria (BA)</option>
                  <option value="Água Fria de Goiás (GO)">
                    Água Fria de Goiás (GO)
                  </option>
                  <option value="Água Limpa (GO)">Água Limpa (GO)</option>
                  <option value="Água Nova (RN)">Água Nova (RN)</option>
                  <option value="Água Preta (PE)">Água Preta (PE)</option>
                  <option value="Água Santa (RS)">Água Santa (RS)</option>
                </select>
              </div>
              <div>
                <label>Senha</label>
                <input
                  placeholder="*******"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="cadastrobtt">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditarPerfil;
