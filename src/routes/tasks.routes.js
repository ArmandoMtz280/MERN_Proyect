import { Router } from "express";
import { authRequired }  from "../middlewares/validateToken.js"; // se exporta validacion de token
import { getTask, getTasks, updateTask, deleteTask, createTask} from "../controllers/tasks.controller.js"; // se exportan funciones para cada tarea del CRUD
import { validateSchema } from "../middlewares/validator.middleware.js"; // Validacion de Schema
import { createTaskSchema } from "../schemas/task.schema.js"; // validacion de creacion de tareas


const router = Router();
      router.get('/tasks', authRequired, getTasks); // Obtener tareas
      router.get('/tasks/:id', authRequired, getTask); // Obtener tarea
      router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask); // Crear tareas
      router.delete('/tasks/:id', authRequired, deleteTask); // Borrar tareas
      router.put('/tasks/:id', authRequired, updateTask); // Modificar tareas

      export default router;