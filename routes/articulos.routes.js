import { Router } from "express";
import{postArticulo} from '../controllers/articulos.controller.js'

export const articulosRouter=Router()


articulosRouter.get('/articulos',(req,res)=>{
    res.send('Ver todos los articulos')
})

articulosRouter.get('/articulos/admin',(req,res)=>{
    res.send('Ver todos los articulos siendo admin')
})

articulosRouter.get('/articulos/:id',(req,res)=>{
    res.send('Ver un articulo '+ req.params.id)
})

articulosRouter.post('/articulos',postArticulo)

articulosRouter.put('/articulo/:id',(req,res)=>{
    res.send('Editar articulo')
})

articulosRouter.delete('/articulo/:id',(req,res)=>{
    res.send('Eliminar articulo')
})