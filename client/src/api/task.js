/**Se crean las rutas para las Tasks */

import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks"); // Otener Tareas

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`); // Obtener Tarea

export const createTaskRequest = (task) => axios.post("/tasks", task); // Crea tareas

export const updateTaskRequest = (task) => axios.put(`/tasks/${task._id}`, task); 

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`); // Elimina tareas

