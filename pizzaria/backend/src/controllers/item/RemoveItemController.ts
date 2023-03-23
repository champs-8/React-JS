import { Request, Response } from "express";
import { RemoveItemService } from "../../services/item/RemoveItemService";

class RemoveItemController {
    async handle(req: Request, res: Response){

        //quando for solicitar value por query params,
        //depois do query tem que colocar o nome da propriedade
        // e tambem tipar (as string) e nao precisa de chaves{}
        const item_id = req.query.item_id as string

        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({item_id});

        return res.json(item)
    }
}
export {RemoveItemController};