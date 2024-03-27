const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () =>{
    //console.log(envs)

    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    
       })
}

//funcion agnóstica autoconvocada
//agnóstica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis al último.

( async() => {
    main()
}) ()
