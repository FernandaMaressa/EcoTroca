import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import logo from "../../assets/logo.svg";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        senha: data.senha,
      };

      const response = await authService.LoginUsuario(payload);

      localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, response.token);
      localStorage.setItem(
        import.meta.env.VITE_USER_KEY,
        JSON.stringify(response.usuario)
      );

      alert("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("E-mail ou senha inválidos.");
    }
  };

  return (
    <>
      <div className="loginP">
        <div className="loginLogo">
          <img className="logo" src={logo} alt="Logo da EcoTroca" />
          <h1>EcoTroca</h1>
        </div>
        <div className="loginInfo">
          <h2>Bem-vindo de volta!</h2>
          <p>Entre com sua conta para continuar trocando</p>
          <div className="loginForms">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email</label>
                <br />
                <input
                  placeholder="seu@email.com"
                  type="email"
                  {...register("email", { required: "Email obrigatório!" })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <label>Senha</label>
                <br />
                <input
                  placeholder="*************"
                  type="password"
                  {...register("senha", { required: "Senha obrigatória!" })}
                />
                {errors.senha && <span>{errors.senha.message}</span>}
              </div>
              <button type="submit" className="entrarbtt">
                Entrar
              </button>
              <p>
                Não tem uma conta?{" "}
                <Link to={"/register"} id="link-register">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
