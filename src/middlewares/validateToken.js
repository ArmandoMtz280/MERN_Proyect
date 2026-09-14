import jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const authRequired = (req, res, next) => { // valida que venga el token
    
   const {token} = req.cookies;
         if(!token) return res.status(401).json({message: "No token, authorization denieds"}); // Si no viene el token

         /**Se pasa como primer parametro el token el segundo es el TOKEN_SECRET 
          * para validar si es nuestro token y no es algun otro */
         jwt.verify(token, TOKEN_SECRET, (err, user) => {  
              
              if(err) return res.status(403).json({message: "Invalid token"})  // si el token no es el correcto
             
              req.user = user;              
              console.log(user);

              next();

         })

}