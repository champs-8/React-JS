import prismaClient from "../../prisma";


class DetailUserService {
    async execute(user_id: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                id:user_id
            },
            select:{
                //quando desejar devolver algo, é so confirmar com true
                id: true,
                name: true,
                email: true
            }
        })

         return user;
    }
}

export {DetailUserService};