//quando carregar a aplicação, vai usar o useEffect, e o useState é para armazenar informações.
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api';
import './home.css';

//movie/now_playing?api_key=a6f11039f81da6060d6f40ea27d0ca15

function Home() {
        const [filmes, setFilmes] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            async function loadFilmes() {

                //tambem vai passar parametros
                //como a chave da API e a linguagem
                const response = await api.get('movie/now_playing', {
                    params:{
                        api_key:'a6f11039f81da6060d6f40ea27d0ca15',
                        language: 'pt-BR',
                        page:'1',
                    }
                });

                //console.log(response.data.results.slice(0,10));
                setFilmes(response.data.results.slice(0,10));
                setLoading(false);
            };

            loadFilmes();
            
        }, []);

        if (loading) {
            return (
                <div className='loading'>
                    <h2>Carregando filmes...</h2>
                </div>
            )
        }

    return (
        <div className="container">
            <div className='list-filmes'>

                {/* para acessar o useState, usa-se {} */}
                {filmes.map((filme) => {
                    return (
                        // o react pede sempre uma key para o 
                        //primeiro item, quando se usa o map().

                        <article key={filme.id}>
                            {/* strong é o titulo */}
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} title={filme.title}/>
                            <Link to={`/filme/:${filme.id}`}>Acessar filme</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;