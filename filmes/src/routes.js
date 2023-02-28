import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/home';
import Filme from './pages/filme';
import Header from "./componentes/header";
import Erro from './pages/erro';
import Favoritos from './pages/favoritos';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
            {/* erro é a ultima rota */}
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;