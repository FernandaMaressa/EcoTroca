import './Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <div>
                <h2>Criar Conta</h2>
                <p>Junte-se a nossa comunidade sustentavel</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Cidade:</label>
                        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <button>Cadastrar</button>
                </form>
                
            </div>
        </>
    );
}
export default Cadastro;