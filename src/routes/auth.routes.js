import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = Router();
      
      router.post('/register', register); // se crean la rutas
      router.post('/login', login);
      router.post('/logout', logout)


      export default router; // se exporta el router