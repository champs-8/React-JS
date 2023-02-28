import './favoritos.css';
//qunado abrir a pagina favoritos, vai buscar os itens salvos
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Favoritos() {

    const [filmes, setFilmes] =  useState([]);

    useEffect(()=>{
        const mylist = localStorage.getItem('@champsflix');
        //passar o array para string json se tiver algo ou iniciar um array novo se nao tiver nada
        setFilmes(JSON.parse(mylist) || []);

    }, []);

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
            <ul>
                {/* sempre que for adicionar algo externo, ser entre chaves */}

                {/* quando se faz map, precisa passar uma key */}
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Favoritos;