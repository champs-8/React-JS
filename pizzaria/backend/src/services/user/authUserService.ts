import prismaClient from "../../prisma";
import { compare } from "bcryptjs"; 
/*compare, vai comparar se a senha 
salva no banco de dados, bate com a senha informada,
vai devolver um booleano*/
import {sign} from 'jsonwebtoken'


interface AuthRequest {
    email: string;
    password: string;
}

//vai receber o email e a senha do usuario
class AuthUserService {
    //sintaxe de como utilizar o interface
    async execute({email, password}: AuthRequest) {

        //verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email:email
            }
        });

        if(!user) {
            throw new Error(`don't this user exist`);
        }


        //verificar se a senha é a mesma
        //OBS: usuario ja encontrado no DB
        const passwordCompare = await compare(password, user.password);

        if(!passwordCompare) {
            throw new Error('Password incorrect')
        }

        //se deu tudo certo, vamos gerar o token para o user.

        const token = sign(
            //payload
            {
                name: user.name,
                email: user.email
            },
            //secret
            process.env.JWT_SECRET, //o TS nao aceita deixar estrito para tipagem, desativamos a checagem de tipagem
            {
                subject:user.id, //ID
                expiresIn: '30d' //expirar
            }
        );

        
        return {
            ID: user.id,
            NAME: user.name,
            EMAIL:user.email,
            token
        }
        
    }
}

export {AuthUserService};