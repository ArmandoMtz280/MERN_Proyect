import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken"


export function createAccessToken(payload){ //  funcion para crear el token 
     return new Promise((resolve, reject) => {
        jwt.sign( // se crea el token
        payload,
        TOKEN_SECRET,
        {
         expiresIn: '1d'
        },
        (err, token) => {
          if(err) reject(err);
          resolve(token)
        } 
       );
     })
}