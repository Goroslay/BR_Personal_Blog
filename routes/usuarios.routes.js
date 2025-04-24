import { Router } from "express";

import { postUsuarioRegister,postUsuarioLogin } from "../controllers/usuarios.controller.js";

export const usuariosRouter= Router()

usuariosRouter.post('/registro',postUsuarioRegister)

usuariosRouter.post('/login',postUsuarioLogin)