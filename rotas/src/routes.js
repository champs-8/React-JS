import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Sobre from './pages/sobre';



function RoutesApp() {
    return(

        //dentro delas vai as nossas rotas
        //as routes
        <BrowserRouter>
            <Routes>

                {/* pra cada rota 
                 vai carregar o home */}
                <Route path={'/'} element= {<Home/>}/> 

                {/* caminho da url vai em path,
                 e o codigo a ser carregado será o element 
                 dentro de uma tag */}
                <Route path={'/sobre'} element= {<Sobre/>}/>


            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;