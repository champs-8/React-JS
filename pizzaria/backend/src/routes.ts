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
import { RemoveItemController } from './controllers/item/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailsOrderController } from './controllers/order/DetailOrderController';
import { ConcludeOrderController } from './controllers/order/ConcludeOrderController';

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

router.put('/order/send', isAuthenticated, new SendOrderController().handle);

router.get('/orders/no-draft', isAuthenticated, new ListOrderController().handle);

router.get('/orders/details', isAuthenticated, new DetailsOrderController().handle);

router.put('/orders/conclude', isAuthenticated, new ConcludeOrderController().handle);

/* Rotas ITEM */
router.post('/item/add', isAuthenticated, new AddItemController().handle);

router.delete('/item/remove', isAuthenticated, new RemoveItemController().handle);

export {router};