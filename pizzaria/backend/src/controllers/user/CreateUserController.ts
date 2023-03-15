import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    //handle é manusear
    async handle(req: Request, res: Response){
        // console.log(req.body);

        //desestruturando a requisição
        const {name, email, password} = req.body;

        //instanciando o modulo do services
        const createUserService = new CreateUserService();

        //vai esperar enviar os dados do body request,e  tambem precisa passar a mesma quantidade de params
        //responsavel pela manipulação dos dados
        const user = await createUserService.execute({name, email, password});

        return res.json(user);
    }
}

export {CreateUserController};