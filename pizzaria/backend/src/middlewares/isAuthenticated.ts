import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string,
}
export function isAuthenticated(req:Request, res:Response, next:NextFunction) {
    //receber o token
    //token vem dentro do cabeçalho da requisição
    const authToken = req.headers.authorization; // boolean

    if(!authToken) {
        //vai barrar a autorização aqui
        return res.status(401).end();
    }

    //vai dividir em 2 por causa do espaço
    const [, token] = authToken.split(" ");


    try{
        //validar o token
        const {sub} = verify(token, process.env.JWT_SECRET) as Payload //afirmando que vai devolver o tipo PAYLOAD

        //o sub está recebendo o ID (??)
        //recuperar o ID do token e colocar numa variavel dentro do req
        req.user_id = sub;


        return next();
    }catch(err){
        return res.status(401).end();
    }
}