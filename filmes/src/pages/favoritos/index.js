
// REACT TOASTIFY PARA PERSONALIZAR OS ALERTS



import './favoritos.css';
//qunado abrir a pagina favoritos, vai buscar os itens salvos
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {

    const [filmes, setFilmes] =  useState([]);

    useEffect(()=>{
        const mylist = localStorage.getItem('@champsflix');
        //passar o array para string json se tiver algo ou iniciar um array novo se nao tiver nada
        setFilmes(JSON.parse(mylist) || []);

    }, []);

    function excluirFilme(id) {
        let filterMovie = filmes.filter((item) => {
            return (item.id !== id);
        })
        
        // ja vai atualiazar a lista, tem que converter para string
        localStorage.setItem('@champsflix', JSON.stringify(filterMovie));
        setFilmes(filterMovie);
        toast.success('Filme removido com sucesso');
    };

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {/* pode fazer verificaçãoes dentro da estrutura html */}
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
            <ul>
                {/* sempre que for adicionar algo externo, ser entre chaves */}

                {/* quando se faz map, precisa passar uma key */}
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>

                                {/* vai passar uma função anonima para chamar a outra função
                                passando os parametros */}
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Favoritos;