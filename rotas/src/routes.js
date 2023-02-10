import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from "./componentes/Header";
import Erro from './pages/Erro';
import Produto from './pages/Produto';



function RoutesApp() {
    return(

        //dentro delas vai as nossas rotas
        //as routes
        <BrowserRouter>
            <Header/>
            <Routes>

                {/* pra cada rota 
                 vai carregar o home */}
                <Route path={'/'} element= {<Home/>}/> 

                {/* caminho da url vai em path,
                 e o codigo a ser carregado será o element 
                 dentro de uma tag */}
                <Route path={'/sobre'} element= {<Sobre/>}/>


                <Route path={'/contato'} element= {<Contato/>}/>
                <Route path={'/produto/:id'} element={<Produto/>}/>

                {/* componente notfound */}
                <Route path={'*'} element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;