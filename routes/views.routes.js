import { Router } from "express";

import { soloPrivado,soloPublico } from "../middlewares/auth.js";

export const viewssRouter= Router()

viewssRouter.get('/registro',soloPublico,postUsuarioRegister)
viewssRouter.get('/login',soloPublico,postUsuarioLogin)

viewssRouter.get('/home',soloPublico,(req,res)=>{
    res.send('ruta inicial')
})

viewssRouter.get('/admin',soloPrivado,(req,res)=>{
    res.send('Ver todos los articulos siendo admin')
})