import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'


import { articulosRouter } from './routes/articulos.routes.js'
import { usuariosRouter } from './routes/usuarios.routes.js'
import errorHandler from './middlewares/errorHandler.js'

const port = 3000 
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use('/api/v1/',articulosRouter)
app.use('/api/v1/',usuariosRouter)




app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})