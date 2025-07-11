import './Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"

function Cadastro() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nome: ${name} vida boa`);
        navigate("/login");
    }


    return (
        <>
            <div className='registerP'>
                <button className='voltarInicio'>← Voltar ao início</button>
                <div className='registerLogo'>
                    <img className='logo'
                        src={logo} alt="Logo da EcoTroca" />
                    <h1>EcoTroca</h1>
                </div>
                <div className='registerInfo'>
                    <h2>Criar Conta</h2>
                    <p>Junte-se a nossa comunidade sustentavel</p>

                    <div className='registerForms'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nome</label>
                                <input placeholder='Seu nome' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input placeholder='seu@email.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label>Localização</label>
                                <input placeholder='Cidade, Estado' type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                            </div>
                            <div>
                                <label>Senha</label>
                                <input placeholder='*******' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button className='cadastrobtt'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cadastro;