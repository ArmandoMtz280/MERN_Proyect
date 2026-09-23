import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"; // convierte en json las cookies para poderlas visualizar
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"

const app = express(); // Servidor
      
      app.use(cors({origin: "http://localhost:5173"})); // permite comunicacion entre dominios
      app.use(morgan('dev'));
      app.use(express.json()); // para convertir el request body en formato json y poder verlo en consola
      app.use(cookieParser()); // visualizar cookies en json
      app.use('/api', authRoutes); // rutas
      app.use('/api', tasksRoutes); // rutas

    export default app; // se exporta app