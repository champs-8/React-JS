import { Request, Response } from "express";
import { AddItemService } from "../../services/item/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response){

        const {product_id, order_id, amount} = req.body

        const addItemService = new AddItemService();

        const item = await addItemService.execute({amount, product_id, order_id});

        res.json(item)
    }
}
export {AddItemController}