import { crearArticulo,obtenerArticulo,obtenerArticuloPorID,editarArticulo,eliminarArticulo } from "../models/articulos.model.js";


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


const getArticulo=async (req,res,next) => {
    try {
        const articulos=await obtenerArticulo()
        res.status(200).json({
            succes:true,
            data:articulos
        })
        
    } catch (e) {
        next(e)
    }
}

const getArticuloByID=async (req,res,next) => {
    try {
        const articulo=await obtenerArticuloPorID(req.params.id)
        res.status(200).json({
            succes:true,
            data:articulo
        })
    } catch (e) {
        next(e)
    }
}


const putArticulo = async (req,res,next) => {
    try {
        const articulo = await editarArticulo(req.params.id,req.body)
        res.status(200).json({
            succes:true,
            data:articulo
        })
    } catch (e) {
        next(e)
    }
}

const deleteArticulo = async (req,res,next) => {
    try {
        const articulos = await eliminarArticulo(req.params.id)
        res.status(200).json({
            succes:true,
            data:articulos
        })
    } catch (e) {
        next(e)
    }
}


export {postArticulo,getArticulo,getArticuloByID,putArticulo,deleteArticulo}