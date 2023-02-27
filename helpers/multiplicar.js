const { rejects } = require('assert')
const  fs  = require('fs')
const colors = require('colors')


const crearArchivo = (base,listar,hasta) =>{
    console.log(`=============================`.rainbow)
    console.log(`           Tabla del ${base}        `.white)
    console.log(`=============================`.rainbow)    

    let salida , salida1 = ""
    for (let index = 0; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base*index}\n`
        salida1 += base + ' x '.magenta   + index + ' = '.magenta + (base*index) + '\n'
    }
    if (listar == true) {console.log(salida1.green)}

    const mypromise = new Promise ((resolve,rejects) => {
        try {
            fs.writeFileSync(`salida/tabla-${base}.txt`,salida) 
            resolve("se creo el archivo correctamente".bgGreen)
        } catch (error) {
            rejects("no se puedo crear el archivo".red)
        }
       
} )
return mypromise
}

module.exports = {
   crearArchivo
}