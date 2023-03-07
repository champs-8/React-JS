const  express = require('express')

//QUERY PARAMS= ?nome=NODE_JS

//ROUTE PARAMS= /curso/2

//REQUEST BODY= { nome: 'NODE_JS', tipo: 'backend'}


const server = express();
//localhost:3000/curso

server.use(express.json());

// o GET serão dados da aplicação, informações que serão retornada

const cursos = ['NODE JS', 'Javascript', 'Java', 'React', 'PHP', 'SQL', 'HTML5', 'Python'];


//middleware Global (independente da rota)
//next serve para seguir o fluxo de requisição
server.use((req, res, next) => {
    console.log(`URL Chamada: ${req.url}`);
    return next();
})


//middleware de verificação do nome
function checkCurso(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json({Error: 'Nome do curso é obrigatório'})
    }
    return next();
}


//middleware de verificação do index
function checkIndex(req, res, next) {

    /* se o valor passado por parametro na URL nao
    tiver index no array, vai retornar 400 */
    const curso = cursos[req.params.index]
    
    if(!curso) {
        return res.status(400).json({Error: 'Index inválido.'})
    }

    req.curso = curso
    return next();
}


server.get('/cursos', (req, res) => {
    return res.json(cursos);
})



// /: serve para indicar que essa rota está esperando um parametro
server.get('/cursos/:index', checkIndex, (req, res) => {
    // const index = req.params.id;
    const {index} = req.params;
    
    // return res.json({ID: `O Id do curso é ${id}`});  
    return res.json({Curso: `${cursos[index]}`});  
})

//EXEMPLO UTILIZANDO O QUERY PARAMS

// server.get('/cursos', (req, res) => {
//     const nome = req.query.nome;
//     /*SAÍDA

//     localhost://3000/cursos?nome=

//     */
    
//     return res.json({curso: `Aprendendo ${nome}`});
// });


//Vai criar um novo curso
server.post('/cursos', checkCurso, (req, res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
})


//atualizando um curso, precisa mandar um ID
server.put('/cursos/:index', checkCurso, checkIndex, (req, res) => {
    //vai receber o parametro do ID
    const {index} = req.params;

    //vai receber o nome desejdo
    const {name} =  req.body;

    //curso que tiver na posição do id, vai ter  nome trocado.
    cursos[index] = name;

    return res.json(cursos)
})


//excluindo algum curso
server.delete('/cursos/:index', checkIndex, (req, res) => {
    const {index} = req.params;

    //vai deletar o primeiro que for passado
    cursos.splice(index, 1);

    return res.json(cursos);
})



server.listen(3001);