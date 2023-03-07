const  express = require('express')

//QUERY PARAMS= ?nome=NODE_JS

//ROUTE PARAMS= /curso/2

//REQUEST BODY= { nome: 'NODE_JS', tipo: 'backend'}


const server = express();
//localhost:3000/curso

// o GET serão dados da aplicação, informações que serão retornada

const cursos = ['NODE JS', 'Javascript', 'Java', 'React', 'PHP', 'SQL', 'HTML5', 'Python'];





// /: serve para indicar que essa rota está esperando um parametro
server.get('/curso/:index', (req, res) => {
    // const index = req.params.id;
    const {index} = req.params;
    
    // return res.json({ID: `O Id do curso é ${id}`});  
    return res.json({Curso: `${cursos[index]}`});  
})

//EXEMPLO UTILIZANDO O QUERY PARAMS

// server.get('/curso', (req, res) => {
//     const nome = req.query.nome;
//     /*SAÍDA

//     localhost://3000/curso?nome=

//     */
    
//     return res.json({curso: `Aprendendo ${nome}`});
// });

server.listen(3000);