import {Router} from 'express';
import  multer from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { DetailUserController } from './controllers/user/detailUserControlle';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import uploadConfig from './config/multer'

const router = Router();

// middleware de upload de imagem
const upload = multer(uploadConfig.upload("./tmp"))

//exemplo de como usar um controller pela rota

/* Rotas USER */
router.post('/users', new CreateUserController().handle);

router.post('/login', new AuthUserController().handle);

router.get('/details',isAuthenticated, new DetailUserController().handle)

/* Rotas CATEGORY */
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)

router.get('/categories', isAuthenticated, new ListCategoryController().handle)

/* Rotas PRODUCTS */

router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);

export {router};