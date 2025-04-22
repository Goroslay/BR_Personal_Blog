import express from 'express'


import { articulosRouter } from './routes/articulos.routes.js'
import errorHandler from './middlewares/errorHandler.js'

const port = 3000 
const app = express()

app.use(express.json())
app.use('/api/v1/',articulosRouter)




app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})