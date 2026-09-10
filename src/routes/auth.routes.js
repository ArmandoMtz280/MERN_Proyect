import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();
      
      router.post('/register', register); // se crean la rutas
      router.post('/login', login);


      export default router; // se exporta el router