import mongoose from "mongoose";
import Task from "../models/task.model.js"; 

export const getTasks = async (req, res) => {

     const tasks = await Task.find({ 
                   user: req.user.id }).populate('user') // Busca por tareas, trae la informacion completa del usuario y solo trae las tareas del usuario que esta autenticado
           res.json(tasks)

};


export const createTask = async (req, res) => {

     const { title, description, date } = req.body; // Recibe un objeto en la peticion

     const newTask = Task({ // Crea la tarea nueva
        title,
        description,
        date,
        user: req.user.id
     });


     const savedTask = await newTask.save(); // Guarda la nueva tarea

     res.json(savedTask); // Lo devuelve al front

};


export const getTask = async (req, res) => {

     const task = await Task.findById(req.params.id).populate('user'); // Lo busca por ID

     if(!task) return res.status(404).json({message: "Task not found"})  ////////
     res.json(task)

};


export const updateTask = async (req, res) => {

     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
         new: true
     }); // Lo busca por ID y devuelve la tarea nueva actualizada

     if(!task) return res.status(404).json({message: "Task not found"})  ////////
     res.json(task)

};
export const deleteTask = async (req, res) => {

     const task = await Task.findByIdAndDelete(req.params.id); // Lo busca por ID

     if(!task) return res.status(404).json({message: "Task not found"})  ////////
     //res.json(task)
     return res.sendStatus(204);

};