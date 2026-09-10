import User from "../models/user.model.js"

export const register = async (req, res) => {

    const {email, password, username} = req.body;
          console.log(email, password, username);


       try{

        const newUser =  new User({ // se crea intancia para nuevo usuario
        username,
        email,
        password
        
        });

       const userSaved = await newUser.save(); // guardarlo en BD
       res.json(userSaved); // lo devuelve al front (es el response)

        console.log(newUser);

        res.send('registrando...    ');
       }catch(error){
          console.log(error);3
       }
    
};

export const login = (req, res) => {res.send('login')}