import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js"

const app = express(); // Servidor

      app.use(morgan('dev'));
      app.use(express.json()); // para convertir el request body en formato json y poder verlo en consola

      app.use('/api',authRoutes); // rutas

    export default app; // se exporta app