import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { DetailUserController } from './controllers/user/detailUserControlle';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//exemplo de como usar um controller pela rota
router.post('/users', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/details',isAuthenticated, new DetailUserController().handle)

/*

router.get('/teste', (req: Request, res: Response) => {
    // return res.json({name: "Minha picadura"});


    //exemplo de erro, exceção 

     throw new Error('Erro ao fazer essa requisição');
     
});

*/

export {router};