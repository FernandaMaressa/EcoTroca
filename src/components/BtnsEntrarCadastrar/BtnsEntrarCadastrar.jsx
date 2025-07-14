import "./BtnsEntrarCadastrar.css"
import { Link } from "react-router-dom";
function BtnsEntrarCadastrar(){

    return(
        <>
            <div>
                <Link to={"/login"}>Entrar</Link>
                <Link to={"/register"}>Cadastrar</Link>
            </div>
        </>
    );
}

export default BtnsEntrarCadastrar;