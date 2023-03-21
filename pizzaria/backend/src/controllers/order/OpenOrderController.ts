import { Request, Response } from "express";
import { OpenOrderService } from "../../services/order/OpenOrderService";

class OpenOrderController {
    async handle(req: Request, res: Response){

        const {table, name} = req.body;

        const openOrderService = new OpenOrderService();
        
        const order = await openOrderService.execute({table, name});

        return res.json(order);
    }
}

export {OpenOrderController};