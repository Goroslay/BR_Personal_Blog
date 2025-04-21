import { escribir,leer } from "../database/config.db.js";
import AppError from '../utils/appError.js'

const crearArticulo = async(articulo)=>{
    const articulos = await leer()
    if(articulos.find((a)=>a.titulo===articulo.titulo)){
        throw new AppError('Este articulo ya se encuentra registrado',409)
    }

    const nuevoArticulo = {
        id:articulos.length<1 ? 1: articulos[articulos.length-1].id+1,
        ...articulo
    }

    articulos.push(nuevoArticulo)

    escribir(articulos)
    return nuevoArticulo
}


export {crearArticulo}