import User from "../models/user.model.js"
import bcrypt from "bcryptjs"; // incriptacion

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

       res.json({
         id: userSaved._id,
         username: userSaved.username,
         email: userSaved.email,
         createdAT: userSaved.createdAt,
         updatedAt: userSaved.updatedAt,
       }); // lo devuelve al front (es el response)

        console.log(newUser);

        res.send('registrando...    ');
       }catch(error){
          console.log(error);3
       }
    
};

export const login = (req, res) => {res.send('login')}