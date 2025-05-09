import { Router } from "express";

import{postArticulo,getArticulo,getArticuloByID,putArticulo,deleteArticulo} from '../controllers/articulos.controller.js'
import validaciones from '../middlewares/validaciones.js'

export const articulosRouter=Router()



articulosRouter.get('/articulos',getArticulo)

articulosRouter.get('/articulos/:id',getArticuloByID)

articulosRouter.post('/articulos',validaciones,postArticulo)

articulosRouter.put('/articulos/:id',putArticulo)

articulosRouter.delete('/articulos/:id',deleteArticulo)