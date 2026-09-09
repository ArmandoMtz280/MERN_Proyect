import express from "express";
import morgan from "morgan";


const app = express(); // Servidor
      app.use(morgan('dev'));

    export default app; // se exporta app