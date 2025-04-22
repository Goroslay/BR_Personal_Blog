import { body, validationResult } from "express-validator";
import AppError from '../utils/appError.js'


const validaciones = [
    body('titulo')
        .isString()
        .withMessage('El titulo debe ser texto')
        .isLength({min:2,max:30})
        .withMessage('El tamaño debe ser mayor de 2 caracteres y menor de 30'),

    body('contenido')
        .notEmpty()
        .withMessage('Debe contener información'),
    
    (req,res,next)=>{
        const errores = validationResult(req)
        if(!errores.isEmpty()){
            const mensaje = errores.array().map(e=>e.msg).join(', ')
            return next(new AppError(mensaje,400))
        }
        next()
    }
    
]

export default validaciones
