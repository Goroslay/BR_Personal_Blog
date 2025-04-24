import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

//import AppError from '../utils/appError.js'

dotenv.config()

const ruta = path.join(process.cwd(),'/database/articulos.db.json')

const sequelize  = new Sequelize(process.env.DB_name,process.env.DB_usuario,process.env.DB_pass,
    {
        host:process.env.DB_host,
        port:process.env.DB_port,
        logging:false,
        dialect:'postgres'
    }
)

/*const conectarDB= async () => {
    try {
        await sequelize.authenticate()
        console.log('Conectado a la BD')
    } catch (e) {
        throw new AppError('Problemas al conectar con la base de datos',500)
    }
}*/



async function escribir(data) {
    fs.writeFileSync(ruta,JSON.stringify(data,null,2))
}

async function leer(){
    if(!fs.existsSync(ruta)){
        escribir([])
    }

    const data=JSON.parse(fs.readFileSync(ruta))
    return data
}

export {escribir,leer,sequelize}