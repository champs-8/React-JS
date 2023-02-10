import { Link } from "react-router-dom";

function Contato() {
    return (
        <div>
            <h1>Página de Contato</h1>
            <span>Contato da empresa: (38) 32211548</span><br></br>

            <Link to={'/'}>Home</Link><br></br>
            <Link to={'/sobre'}>Sobre</Link>
        </div>
    );
};

export default Contato;