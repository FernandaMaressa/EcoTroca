import './Login.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/");
    }
    return (
        <>
            <div>
                <span>← Voltar ao Início</span>
                <h2>Bem Vindo de Volta!</h2>
                <p>Entre com sua conta para continuar trocando</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Email:</label>
                            <input type="email"{...register("email", { required: "email obrigatorio" })} />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input type="password"{...register("senha", { required: "senha obrigatorio" })} />
                            {errors.senha && <span>{errors.senha.message}</span>}
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;