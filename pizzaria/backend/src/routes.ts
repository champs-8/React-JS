import {Router, Request, Response} from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({name: "Minha picadura"});


    //exemplo de erro, exceção 

    //  throw new Error('Erro ao fazer essa requisição');
     
});

export {router};