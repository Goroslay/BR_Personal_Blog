import dayjs from "dayjs";

import { escribir,leer } from "../database/config.db.js";
import AppError from '../utils/appError.js'

const crearArticulo = async(articulo)=>{
    const articulos = await leer()
    if(articulos.find((a)=>a.titulo===articulo.titulo)){
        throw new AppError('Este articulo ya se encuentra registrado',409)
    }

    const fecha = dayjs()
    const nuevoArticulo = {
        id:articulos.length<1 ? 1: articulos[articulos.length-1].id+1,
        ...articulo,
        fecha:fecha.format('DD/MM/YYYY')
    }

    articulos.push(nuevoArticulo)

    escribir(articulos)
    return nuevoArticulo
}


const obtenerArticulo = async () => {
    const articulos = await leer()
    return articulos
}

const obtenerArticuloPorID = async (id) => {
    const articulos = await leer()
    const articulo = articulos.filter((a)=>a.id==id)
    if(!articulo){
        throw new AppError('No existe articulo con esta ID',404)
    }
    return articulo
}

const editarArticulo = async (id,ediciones) => {
    const articulos = await leer()
    const indice = articulos.findIndex((a)=>a.id==id)
    const fecha = dayjs()

    if(indice===-1){
        throw new AppError('No existe articulo con esta ID',404)
    }

    if(articulos.find((a)=>a.titulo===ediciones.titulo)){
        throw new AppError('Este titulo ya se encuentra registrado',409)
    }

    const articuloEditado = {
        id:id,
        titulo: ediciones.titulo || articulos[indice].titulo,
        contenido: ediciones.contenido || articulos[indice].contenido,
        fecha: fecha.format('DD/MM/YYYY')
    }

    articulos[indice] = articuloEditado

    await escribir(articulos)

    return articuloEditado
}


const eliminarArticulo= async (id) => {
    const articulos = await leer()
    const indice = articulos.findIndex((a)=>a.id==id)
    if(indice===-1){
        throw new AppError('No existe articulo con esta ID',404)
    }
    articulos.splice(indice,1)
    await escribir(articulos)
    return articulos
}

export {crearArticulo,obtenerArticulo,obtenerArticuloPorID,editarArticulo,eliminarArticulo}