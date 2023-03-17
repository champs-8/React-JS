import prismaClient from "../../prisma";
import {hash} from "bcryptjs"; //criptografar algo


//Quando o controlador usar o service, precisar criar uma interface
//criando um interface
interface UserRequest {
    name: string;
    email: string;
    password:  string;
}

// TIPAGEM é obrigar o usuário a passar os dados que vão ser necessários.

class CreateUserService {
    //desconstrução como parametro
    async execute({name, email, password}: UserRequest) {

        //verificar se o usuario enviou um email
        if(!email) {
            throw new Error("Email incorrect")
        }

        //verificar se o email já esta existe
        //vai acesar o Model user (tabela com o nome user)
        //findFirst, retornar o primeiro item que encontrar
        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        //se existir, vai dar um erro
        if(userAlreadyExist) {
            throw new Error('User already exists')
        }

        const passwordHash = await hash(password, 8); //8 é um tipo de criptografia, tem varias na documentação


        //cadastrar o usuario
        //data vai criar os valores nas colunas do banco de dados
        const user = await prismaClient.user.create({
            data: {
                name:name,
                email:email,
                password:passwordHash
            },
            // select serve para escolher o que voce quer que retorna para voce
            select:{
                id:true,
                name:true,
                email:true
            }
        });

        return user;
    }
}

export {CreateUserService};