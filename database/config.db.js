import fs from 'fs'
import path from 'path'

const ruta = path.join(process.cwd(),'/database/articulos.db.json')



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

export {escribir,leer}