import { Router } from "express";
import { authRequired }  from "../middlewares/validateToken.js";
import { getTask, getTasks, updateTask, deleteTask, createTask} from "../controllers/tasks.controller.js";

const router = Router();
      router.get('/tasks', authRequired, getTasks); // Obtener tareas
      router.get('/tasks/:id', authRequired, getTask); // Obtener tarea
      router.post('/tasks', authRequired, createTask); // Crear tareas
      router.delete('/tasks/:id', authRequired, deleteTask); // Borrar tareas
      router.put('/tasks/:id', authRequired, updateTask); // Modificar tareas

      export default router;