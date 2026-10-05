import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest} from "../api/task";


const TaskContext = createContext(); // Se crea el contexto

export const useTasks = () => {

    const context = useContext(TaskContext);

    if(!context) { // se valida el contexto
        throw new Error("use Task must be used within a TaskProvider");
    }

    return context;   

};

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])

    const createTask = async (task) => { // Crea las Tareas
        const res = await createTaskRequest(task)
        console.log(res)
    };

    const getTasks = async (task) => { //Obtiene las Tareas
        try{
           const res = await getTasksRequest(task);
           setTasks(res.data)
        }catch(error){
           console.error(error)
        }
    };

    const deleteTask = async (id) => { // Borra tareas y actualiza el front
        try{
           const res = await deleteTaskRequest(id);
           if(res.status === 204) setTasks(tasks.filter(task => task._id !== id));// filtra el id de las tareas q sean diferentes al id q se le paso y crea un nuevo arreglo y actualiza en front
        }catch(error){

        }
        
    };

    const getTask = async (id) => { 
       try{
        const res = await getTaskRequest(id);
        return res.data
       }catch(error){
         console.error(error);
       }
    };

    const updateTask = async (id, task) => {
        try {
          await updateTaskRequest(id, task)
        } catch(error){
            console.error(error);
        }
    };

    return(
 
        <TaskContext.Provider value={{
           tasks,
           createTask,
           getTasks,
           deleteTask,
           getTask,
           updateTask,
        }}>
           {children}
        </TaskContext.Provider>

    );
}