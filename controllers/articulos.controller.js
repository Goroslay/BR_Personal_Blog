import { crearArticulo } from "../models/articulos.model.js";


const postArticulo=async(req,res,next)=>{
   try{
    const articuloNuevo= await crearArticulo(req.body)
    
    res.status(201).json({
        succes:true,
        message:'Articulo creado correctamente',
        ID:articuloNuevo.id
    })
    
    }catch(err){
        next(err)
    }
}

export {postArticulo}