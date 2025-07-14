import './Login.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";


function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/");
    }
    return (
        <>
            <div className='loginP'>
                <Link to={"/"} className='voltarInicio'>← Voltar ao início</Link>
                <div className='loginLogo'>
                    <img className='logo'
                        src={logo} alt="Logo da EcoTroca" />
                    <h1>EcoTroca</h1>
                </div>
                <div className='loginInfo'>
                    <h2>Bem-vindo de volta!</h2>
                    <p>Entre com sua conta para continuar trocando</p>
                    <div className='loginForms'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Email</label>
                                <br />
                                <input placeholder='seu@email.com' type="email"{...register("email", { required: "Email obrigatório!" })} />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div>
                                <label>Senha</label>
                                <br />
                                <input placeholder='*************' type="password"{...register("senha", { required: "Senha obrigatória!" })} />
                                {errors.senha && <span>{errors.senha.message}</span>}
                            </div>
                            <button type="submit" className='entrarbtt'>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;