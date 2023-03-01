import { useEffect, useState } from "react";
//pegar paarametros, useNavigate 
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";   
import './filme.css';
import {toast} from 'react-toastify';

function Filme() {
    const {id} = useParams();
    const navigation = useNavigate();

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
                //vai enviar o usuario para o home,
                //redirecionar a url para a tela de home
                navigation("/", { replace: true});
                return;
            })
        }
        loadFilme();

        return () => {
            console.log('Componente foi desmontado');
        }

    }, [navigation, id]); //é bom adicionar as dependencias externas que estamos utilizando


    function salvarFilme() {
        const myList = localStorage.getItem("@champsflix");

        //converter de string para uma lista 
        let filmesSalvos = JSON.parse(myList) || [];

        //se no array que está verificando, se há pelo menos um item da busca.
        const hasFilmes = filmesSalvos.some((filmesSalvo) => 
            filmesSalvo.id === filme.id
        );

        if(hasFilmes) {
            toast.warn('Esse filme já está na sua lista')
            return
        };

        filmesSalvos.push(filme);
        //tem que transformar para string porque nao salva array
        localStorage.setItem("@champsflix", JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso')

    }
    
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
                <button onClick={salvarFilme}>Salvar</button>
                <button><a href={`https://youtube.com/results?search_query=${filme.title}+trailer`} target='_blank' rel="external noreferrer">Trailer</a></button>
            </div>

        </div>
    );
}

export default Filme;