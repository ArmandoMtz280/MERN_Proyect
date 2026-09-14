import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();
      
      router.post('/register', register); // se crean la rutas
      router.post('/login', login);
      router.post('/logout', logout)
      router.get('/profile', authRequired, profile)

      export default router; // se exporta el router