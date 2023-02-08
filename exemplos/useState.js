import {useState} from 'react';

function App() {

    const [ nome, setNome] = useState(''); 
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('0');

    const [user, setUser] = useState({});    

    function handleRegister(e) {
        e.preventDefault();

        alert('usuario registrado')
        setUser({
            nome: nome,
            idade: idade,
            email: email
        })
    }
    
    return(
        <div>
            <h1>Cadastrando usuário</h1>

            <form onSubmit={handleRegister}>
                <label>Nome:</label><br/>

                {/* valu e onchange são importantes, value o valor ja vem estatico
                onchange, toda vez que digitar no input, as alterações vao para o useState */}

                
                <input placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/><br/>
                <label>E-mail:</label><br/>
                <input placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>Idade:</label><br/>
                <input placeholder='Digite sua idade' value={idade} onChange={(e) => setIdade(e.target.value)}/><br/>

                <button type='submit'>Registrar</button>
            </form>

            <br/><br/>
            <div>
                <span>Bem vindo: {user.nome}</span><br/>
                <span>Idade: {user.idade}</span><br/>
                <span>Email: {user.email}</span><br/>
            </div>
        </div>
    );
}

export default App;