import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/authUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {

        const {email, password} = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({email, password});

        //o que tiver como resposta da requisição,retornará um json
        return res.json(auth);
    }
}

export {AuthUserController};