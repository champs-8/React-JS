//está sendo criada na pasta express, 
//porque o request é um metodo do express
declare namespace Express {
    export interface Request {
        user_id: string;
    }
}