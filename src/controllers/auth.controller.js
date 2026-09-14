import User from "../models/user.model.js"
import bcrypt from "bcryptjs"; // incriptacion
//import jwt from "jsonwebtoken" // genera token
import { createAccessToken } from "../libs/jwt.js"; // importa funcion para crear token


export const register = async (req, res) => {

    const {email, password, username} = req.body;
          console.log(email, password, username);


       try{

        const passwordHash = await bcrypt.hash(password, 10); //encripta password

        const newUser =  new User({ // se crea intancia para nuevo usuario
        username,
        email,
        password: passwordHash // ecripta password
        });

       const userSaved = await newUser.save(); // guardarlo en BD
       const token = await createAccessToken({ id: userSaved._id}) //crea el token
       res.cookie('token', token); // el metodo cookie de express crea la cookie para la respuesta
       res.json({
          id: userSaved._id,
          username: userSaved.username,
          email: userSaved.email,
          createdAT: userSaved.createdAt,
          updatedAt: userSaved.updatedAt,
       }); // lo devuelve al front (es el response)

        console.log(newUser);

        //res.send('registrando...    ');
       }catch(error){
          res.status(500).json({error: error.message})
       }
    
};

export const login = async (req, res) => {

    const {email, password} = req.body;
          console.log(email, password);


       try{

         const userFound = await User.findOne({email});
               if(!userFound) return res.status(400).json({message: "User not Found"}) // valida si encontro el usuario
         
         const isMatch = await bcrypt.compare(password, userFound.password); //se compara la contaseña que usuario captura
               if(!isMatch) return res.status(400).json({messagge: "incorrect password"})

       

      
       const token = await createAccessToken({ id: userFound._id}) //crea el token
       
       res.cookie('token', token); // el metodo cookie de express crea la cookie para la respuesta
       res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          createdAT: userFound.createdAt,
          updatedAt: userFound.updatedAt,
       }); // lo devuelve al front (es el response)

        console.log(userFound);

        //res.send('registrando...    ');
       }catch(error){
          res.status(500).json({error: error.message})
       }
    
};

export const logout = (req, res) => {
   res.cookie("token", "", { expires: new Date(0) });
   return res.sendStatus(200);
};

export const profile = async (req, res) => {
   
   const userFound = await User.findById(req.user.id) // Busca el usuario por id

   if(!userFound) return res.status(400).json({message: "User not Found"}); // si no encuentra el Usuario

   return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAT,
      updateAt: userFound.updatedAt
   })

};