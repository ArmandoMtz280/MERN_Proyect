import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar(){
 
    const { isAuthenticated, logout, user } = useAuth(); // verifica autenticaion para mostrar contenido diferente en el navbar
    console.log(user)
    return(
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
           <Link to="/">
             <h1 className="text-2xl font-bold">Task Manager</h1>
           </Link>
           <ul className="flex gap-x-2">
             {
                isAuthenticated ? (
                <>    
                    <li>
                      Welcome {user.username}
                    </li>
                    <li>
                      <Link to="./add-task" className="bg-indigo-500 px-5 py-1">Add Task</Link>
                    </li>
                    <li>
                      <Link to="./" onClick={() => {
                        logout()
                      }}>Logout</Link>
                    </li>
                </>  

                ) : (
                <>    
                    <li>
                      <Link to="./login" className="bg-indigo-500 px-5 py-1">Login</Link>
                    </li>
                    <li>
                      <Link to="./register" className="bg-indigo-500 px-5 py-1">Register</Link>
                    </li>
                </>      
                )
             }
           </ul>
        </nav>
    );
}