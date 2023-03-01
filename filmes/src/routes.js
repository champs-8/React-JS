import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from "./componentes/header";
import Erro from './pages/Err';
import Favoritos from './pages/Favoritos';

function RoutesApp() {
    return (
        <BrowserRouter basename='{process.env.PUBLIC_URL}'>
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