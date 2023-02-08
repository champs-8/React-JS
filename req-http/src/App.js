import {useState, useEffect} from  'react';
import './style.css';
//https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      //fetch para fazer as requisições;
      //se der tudo certo vai entrar no then e retornar uma promisse
      //converta para json
      //confere as informações com o clg
      //e depois joga essas info para o setNutri para poder usar no app
      fetch(url)
      .then((res)=> res.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <h1>Categoria : {item.categoria}</h1>
            <a className='botao' href='#'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
