import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        //buscar todos os nomes das categorias
        const category = await prismaClient.category.findMany({
            select: {
                id:true,
                name: true 
            }
        })

        return category;
    }
}

export {ListCategoryService};