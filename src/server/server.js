const express = require('express') 
const path = require('path') //asi leemos las variables de aquí.

//funcion que recibe opcions. un objeto desde el app, algo generico, donde se desestructura el puerto y la carpeta public, donde si es vacio es public. 

const startServer = (options) => {
    const { port, public_path = 'public'} = options
    
    const app = express()

    // use es propio de express para los middleware(express).
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible para que se use.

    app.get('*',(req, res) => { //llamada a la variable de entorno 
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        //backtips para usar aquí la variable que yo quiera.
        res.sendFile(indexPath)
        //asegura que funciona una SPA en REact y angular.

    })
    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port}`)
    }) //abre un puerto y va a estar escuchando por ese puerto.

}

module.exports = {
    startServer
}