//Importaciones de librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config(); //permite utilizar variables de entorno que se configura en .env


//coneccion a la base de datos
const conectarBD = require('./connection')
conectarBD()

//Se inicializa la libreria
const app = express();


//Configuraciones
const port = process.env.PORT || 3000;


//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

// const myPath = __dirname;
// const myPath2 = path.join(__dirname, 'public')
// console.table({myPath, myPath2})

//REcursos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Rutas
app.use(require('./routes/users.routes'));


//Iniciar servidor
app.listen(port, console.log(`Servidor iniciado en el puerto ${port} URL: http://localhost:${port}`))
