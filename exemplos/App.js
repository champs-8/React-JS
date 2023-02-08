// import Nome from "./componentes/Nome";
import  {useState} from "react";

//isso é um componente
function App() {
  //"onde tiver aluno, voce configura para trocar o nome do useState"
  const [aluno, setAluno] = useState('ÇHAMPS pika voadora');
  
  function changeName(nome) {
    //agora configura o setAluno passando o nome que deseja como parametro
    setAluno(nome)
  }
  
  //esses testes do useState serve para trocar de dados sem precisar atualizar a pagina.
  return (
    <div>
      <h1>Componente App</h1><br/>
      {/* <Nome aluno="Lucas" idade = {20}/> */}

      {/*aqui estarei configurando manual e ao clicar no botao, troca automatico */}

      <h2>Olá {aluno}</h2>

      {/* quando se passar parametros diretos da call, precisa-se ser em arrowFunction */}
      <button onClick={() => changeName('Fábio')}>Mudar nome</button>
    </div>
  );
}

export default App;
