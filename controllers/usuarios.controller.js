import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";


import { usuario} from "../models/usuarios.model.js";
import AppError from "../utils/appError.js";


const postUsuarioRegister = async (req,res,next) => {

    const {nombre,mail,password} = req.body

    try {
        
        const existe = await usuario.findOne({where:{mail:mail}})

        if(existe!==null){
            throw new AppError('Este correo ya se encuentra registrado',409)
        }

        const salt= await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        
        const nuevoUsuario= await usuario.create({
            nombre,
            mail,
            password:hashPassword
        })

        const { password: _, ...usuarioSeguro } = nuevoUsuario.get({ plain: true });


        res.status(201).json({
            success:true,
            message:'Usuario creado correctamente',
            data:usuarioSeguro,
            redirect:'/home'
        })
    } catch (e) {
        next(e)
    }
}


const postUsuarioLogin = async (req,res,next) => {
    const {mail,password} = req.body
    try {
        const existe = await usuario.findOne({where:{mail:mail}})
        if(existe===null){
            throw new AppError('Error en las credenciales de inicio de sesion',401)
        }
        const passwordCorrecta = await bcrypt.compare(password,existe.password)
        if(!passwordCorrecta){
            throw new AppError('Error en las credenciales de inicio de sesion',401)
        }

        const token = jwt.sign(
            {mail:mail},
            process.env.JWT_secret,
            {expiresIn:process.env.JWT_expireIn})  
        

        const cookieOption = {
            expires: new Date (Date.now() + process.env.JWT_cookieExpirein * 24 *60 * 60 * 1000),
            path:'/'
        }

        res.cookie('jwt',token,cookieOption)

        res.status(200).json({
            success:true,
            redirect:'/admin'
        })

    } catch (e) {
        next(e)
    }
}

export { postUsuarioRegister,postUsuarioLogin}