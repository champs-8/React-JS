import express, {Request, Response, NextFunction } from "express";
import 'express-async-errors';
import { router } from "./routes";
import cors from 'cors';


const app = express();

app.use(express.json()); //usar esse tipo de formato 
app.use(cors()); //liberar para qualquer IP conseguir fazer requisição
app.use(router);

//recomendaçao da biblioteca async-errors
//middleware Global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    // O que ta passando na rota é do tipo ERRO??
    if(err instanceof Error) {

        //se for uma instancia de erro
        return res.status(400).json({Error: `${err.message}`});
    }

    //se nao for uma intancia de erro, mas for erro
    res.status(500).json({
        status: 'error',
        message: 'Internal server error.'    
    })

});
app.listen(8080, ()=> {
    console.log('***************\nServidor ONLINE\n***************');
});