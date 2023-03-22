import prismaClient from "../../prisma";

interface ItemRequest {
    product_id: string,
    order_id: string
}

class RemoveItemService {
    async execute({product_id, order_id}: ItemRequest) {
        
        const item = await prismaClient.item.delete({
            where:{
                
            }
        })
    }
}
export {RemoveItemService}