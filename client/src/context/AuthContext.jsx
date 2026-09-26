/**
 * Este Documento guarda todos los datos del Usuario para que todos los componentes hijos 
 * lo puedan utilizar
 */

import { createContext, useState, useContext } from "react";

import { registerRequest } from "../api/auth";
import { is } from "zod/v4/locales";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}

/**
 * Se crea un Provider que es un componente que va englobar a otros
 */

export const AuthProvider = ({children}) => {


    const [ user, setUser ] = useState(null) // usuario q va ser leido en toda la app
    const [isAuthenticated, setIsAuthenticated] = useState(false); // verifica que el usario este autenticado
    const [ errors, setErrors] = useState([]);




    const signup = async (user) => {

        try {
             const res = await registerRequest(user) // manda peticion a backend
             console.log(res.data);
             setUser(res.data);
             setIsAuthenticated(true); // pasa a "true" si esta autenticado
        }catch(error){
            console.log(error.response);
            setErrors(error.response.data)
        }
    }

    return (

        <AuthContext.Provider value={{
           signup,
           user,
           isAuthenticated,
           errors,
        }}>
           {children}
        </AuthContext.Provider>

    );

}