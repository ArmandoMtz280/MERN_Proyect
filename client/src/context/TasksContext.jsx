import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";


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

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res)
    };

    const getTasks = async (task) => {
        try{
           const res = await getTasksRequest(task);
           setTasks(res.data)
        }catch(error){
           console.error(error)
        }
    }

    return(
 
        <TaskContext.Provider value={{
           tasks,
           createTask,
           getTasks,
        }}>
           {children}
        </TaskContext.Provider>

    );
}