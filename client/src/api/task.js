/**Se crean las rutas para las Tasks */

import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks"); // Otener Tareas

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`); // Obtener Tarea

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTaskRequest = (task) => axios.put(`/tasks/${task._id}`, task); 

export const deleteTaskRequest = () => axios.delete(`/tasks/${id}`, task);

