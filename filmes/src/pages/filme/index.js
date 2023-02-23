import { useEffect, useState } from "react";
//pegar paarametros
import { useParams } from "react-router-dom";
import api from "../../services/api";   
import './filme.css';

function Filme() {
    const {id} = useParams();
    //começa com um objeto vazio até ter mais informações dos filmes
    const [filme, setFilme] = useState({});
    const [loading,  setLoading] = useState(true);


    useEffect( ()=> {
        async function loadFilme() {

            //requisição
            await api.get(`/movie/${id}`, {
                params: {
                    api_key:'a6f11039f81da6060d6f40ea27d0ca15',
                    language: 'pt-BR',
                }
            })
            //se encontrar o filme, ele cai no then
            .then((response)=>{
                console.log(response.data);
                setFilme(response.data)
                setLoading(false);
                
            }).catch(()=>{
                console.log('FILME NÃO ENCONTRADO');
            })
        }
        loadFilme();

        return () => {
            console.log('Componente foi desmontado');
        }

    }, []); 

    if(loading) {
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }



    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}/10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button><>Trailer</></button>
            </div>

        </div>
    );
}

export default Filme;