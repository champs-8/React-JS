import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response){

        //quando se tratar de query params, tipar a propriedade
        
        const id_order = req.query.id_order as string;

        const removeOrderService = new RemoveOrderService();

        const order = await removeOrderService.execute({id_order});

        return res.json(order); 
    }
}

export {RemoveOrderController};
