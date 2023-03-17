import crypto from 'crypto'; //hash para imagens nao repetirem os nomes
import multer from "multer"; //trabalhar com imagens
import {extname, resolve} from 'path'; //pegar caminhos

export default {
    //quando chamar esse metodo, quero me forneça, qual pasta que é para salvar
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..','..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                }
            },
        )}
    }
}