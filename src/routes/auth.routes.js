import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js"; // Se exporta funcion para validar Schema
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; // Se exportan Shemas para pasarlos a funcion que los valida

const router = Router();
      
      router.post('/register', validateSchema(registerSchema), register); // se crean la rutas
      router.post('/login', validateSchema(loginSchema), login);
      router.post('/logout', logout)
      router.get('/profile', authRequired, profile)

      export default router; // se exporta el router