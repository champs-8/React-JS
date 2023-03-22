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
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { OpenOrderController } from './controllers/order/OpenOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/item/AddItemController';

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

router.get('/products', isAuthenticated, new ListByCategoryController().handle);

/* Rotas ORDER */

router.post('/orders', isAuthenticated, new OpenOrderController().handle);

router.delete('/orders', isAuthenticated, new RemoveOrderController().handle);

/* Rotas ITEM */
router.post('/item', isAuthenticated, new AddItemController().handle);

export {router};