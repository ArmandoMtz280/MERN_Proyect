/**
 * Este Documento guarda todos los datos del Usuario para que todos los componentes hijos 
 * lo puedan utilizar
 */

import { createContext, useState, useContext, useEffect } from "react";

import { registerRequest, loginrequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie"; // nos permite ver las cookies del front


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
    const [loading, setLoading] = useState(true);



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
    };

    const signin = async (user) => {
        try{
            const res = await loginrequest(user);
            console.log(res);
            setIsAuthenticated(true); // pasa a "true" si esta autenticado
            setUser(res.data)
        }catch(error){
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
       if(errors.length > 0) {
        const timer = setTimeout(() => {
             setErrors([])
          }, 1000)

          return () => clearTimeout(timer);
       }
    }, [errors]);


    useEffect(() => { // Hace la peticion al backend para verificar el token verifyTokenRequest()
  
    async function checkLogin(){

        const cookies = Cookies.get() // Nos permite obtener todos sus valores
       
        if(!cookies.token){
            setIsAuthenticated(false);
            setLoading(false)
            return setUser(null);
        }
            try{
                const res = await verifyTokenRequest(cookies.token);
                console.log(res)
                if(!res.data) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
                }
                setIsAuthenticated(true);
                setUser(res.data); 
                setLoading(false);   
            }catch(error){
                setIsAuthenticated(false);
                setUser(null)
                setLoading(false);
            }
        }
       
       checkLogin();

    }, [])

    return (

        <AuthContext.Provider value={{
           signup,
           signin,
           logout,
           loading,
           user,
           isAuthenticated,
           errors,

        }}>
           {children}
        </AuthContext.Provider>

    );

}