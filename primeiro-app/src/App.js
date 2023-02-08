import {useState, useEffect} from 'react';

function App() {

    const [input, setInput] = useState('');
    const [ tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Estudar React JS'
    ]);    

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');

        //se tiver algo salvo na constante, vai passar para json e jogar no array.
        //ao jogar no array, ficará salvo mesmo depois de atualizar.
        if(tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);
    //(quando o componente nao ta na tela)
    

    // toda vez que o usuario entrar na aplicação,
    //assim que carregar, ja vai chamar o useEffect;
    useEffect(() => {
        
        //poder armazenar na aplicação
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));//transformou o array em uma string


        // o que tiver dentro da array, toda vez que sofrer alteração,
        //será chamada o useEffect;
    }, [tarefas]);



    function handleRegister(e) {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }
    
    return(
        <div>
            <h1>Cadastrando usuário</h1>

            <form onSubmit={handleRegister}>
                <label>Nome da tarefa:</label><br/>

                {/* valu e onchange são importantes, value o valor ja vem estatico
                onchange, toda vez que digitar no input, as alterações vao para o useState */}

                
                <input placeholder='Digite uma tarefa' value={input} onChange={(e) => setInput(e.target.value)}/><br/>
                <button type='submit'>Registrar</button>
            </form>

            <br/><br/>

            {/* vai percorrer o array de tarefas,
            como ja vai retornar um JSX por ser () inves de  abrir bloco {} */}
            <ul>    

                {/* quando for utilizar uma lista com array, precisa ter uma key */}
                
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;