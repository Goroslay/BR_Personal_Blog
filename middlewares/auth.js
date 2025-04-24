import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

import { usuario } from '../models/usuarios.model.js'


dotenv.config()

const soloPrivado= (req,res,next)=>{
    const logueado=verficarCookie(req)
    if(logueado){
        return next()
    }
    return res.redirect('/home')
}


const soloPublico = (req,res,next)=>{
    const logueado = verficarCookie(req)
    if(!logueado){
        return next()
    }
    return res.redirect('/admin')

}


function verficarCookie(req){
    try {
        const cookie= req.header.cookie.split(' ;').find((c)=>c.starwith('jwt=').slice(4))
        const decodificada = jwt.verify(cookie,process.env.JWT_secret)
        const usuarioARevisar = usuario.findOne({where:{mail:decodificada.mail}})

        if(!usuarioARevisar){
            return false
        }
        return true 

    } catch (e) {
        next(e)
    }


}


export {soloPrivado,soloPublico}