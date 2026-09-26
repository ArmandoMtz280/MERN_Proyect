import {useForm} from "react-hook-form"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom" // importa navegacion

//import { registerRequest } from "../api/auth"
import { useAuth } from "../context/AuthContext"
//import { is } from "zod/v4/locales";

export default function RegisterPage() {
  
   const {register, handleSubmit, formState: { errors }} = useForm(); // trae los errores
   const {signup, isAuthenticated, errors: registerErrors} = useAuth();
   const navigate = useNavigate(); // Se crea una navegacion

   useEffect(() => {
      
     if(isAuthenticated) navigate("/tasks"); // si es true lo redirecciona

   }, [isAuthenticated]);

   
   
   const onSubmit =  handleSubmit( async (values) => {
            // const res = await registerRequest(values) // manda peticion a backend
            // console.log(res)
               signup(values)
            });

   return(
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))
        }
        <form onSubmit={ onSubmit }>
            <input type="text" {...register("username", {required: true})}  className="w-full bg-zinc-600  text-white px-4 py-2 rounded-md my-2" placeholder="User Name"/>
              {errors.username && ( <p className="text-red-500">Nombre de Usuario es requerido</p> ) }
            <input type="email" {...register("email", {required: true})} className="w-full bg-zinc-600  text-white px-4 py-2 rounded-md my-2" placeholder="Email"/>
              {errors.email && ( <p className="text-red-500">Email es requerido</p> ) }
            <input type="password" {...register("password", {required: true})} className="w-full bg-zinc-600  text-white px-4 py-2 rounded-md my-2" placeholder="Password"/>
              {errors.password && ( <p className="text-red-500">Password es requerido</p> ) }
            <button type="submit">Register</button>
        </form>
      </div>
   );

}