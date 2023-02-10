import {Link} from 'react-router-dom'; //links para navegação

function Home() {
    return(
        <div className='div-main'>
            <h1>bem vindo a pagina HOME</h1>
            <span>The ÇHÄMP$ o pika das galáxias</span> <br></br><br></br>
            
            {/* para navegar entre links 
            Precisa ser em Maiuscula*/}
            <Link to='/sobre'>Sobre</Link> <br/>
            <Link to={'/contato'}>Contato</Link><br/>

            <hr/>
            {/* exemplo de passar um 'id' especifico, montar um pagina dinamica */}
            <Link to={'produto/123'}>Acessar produto 123</Link>
            
        </div>
    );
}

export default Home;