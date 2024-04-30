import express from 'express';
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

//GET Principal
app.get('/', (req, res) => {
    res.render('Raiz principal');
    
});

//POST en la ruta raíz ('/') - ver con postman
app.post('/', (req, res) => {
    res.send('Raiz post');
    
});

//PUT en la ruta raíz ('/') - ver con postman 
app.put('/', (req, res) => {
    res.send('Hola, soy el método PUT');
});

//Prueba error 500
app.get('/error', (req, res, next) => {
    next(new Error('Forced 500 Error'));
});


const fotos = {
    "foto1":{img:"images/fotoc2.jpeg",url:"https://www.youtube.com/watch?v=G5bDu9D5BV4"},
    "foto2":{img:"images/fotom.jpg",url:"https://www.youtube.com/watch?v=GVk9GbK91tg"},
    "foto3":{img:"images/fotom2.jpg",url:"https://www.youtube.com/watch?v=_oXVUE2IWtA"},
    "foto4":{img:"images/image1.jpg",url:"https://www.youtube.com/watch?v=KHj8AI35hV8"},
    "foto5":{img:"images/image2.jpeg",url:"https://www.youtube.com/watch?v=IO5qwv_vJZM"}
}

//GET fotos aleatorias
app.get('/ruta-1',(req,res) => {
    const llaves = Object.keys(fotos);
    res.render('routes/route1',{foto: fotos[llaves[llaves.length*Math.random() << 0]]});
    
});

const Aleatorio = () => Math.floor(Math.random() * 1000) + 1;

//Ejercicios anteriores - aleatorio
app.get('/ruta-2', (req, res) => {
    const num = Aleatorio();
    res.render('routes/route2',{num});
});

//Ejercicios anteriores - texto plano
app.get('/ruta-3', (req, res) => {
    const texto = 'Hola, soy texto plano';
    res.render('routes/route3',{texto});
});

//Middleware para manejar el error 404
app.use((req, res) => {
    res.status(404);
    res.render('errors/404');
});

//Middleware para manejar el error 500
//app.use((err, req, res) => {
//    console.error(err.stack);
//    res.status(500);
//    res.render('errors/500');
//});

// Middleware para manejar el error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/500'); // Enviar la respuesta al cliente
});

app.use(express.json());



//Listen
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});










//import express from 'express';
//import handlebars from 'express-handlebars';
//import dotenv from 'dotenv';

//dotenv.config();
//const app = express();

//app.engine('handlebars', handlebars());
//app.set('view engine', 'handlebars');

//const PORT = process.env.PORT || 8000;

// Middleware para establecer el código de estado 200 en todas las respuestas
//app.use((req, res, next) => {
//  res.status(200);
//  next();
//});


// GET Ruta raíz ('/') para devolver un objeto JSON
//app.get('/gg', (req, res) => {
//    res.send('Hola, soy el método GET');
//});

// GET Ruta raíz ('/') para devolver un objeto JSON
//app.get('/prueba1', (req, res) => {
//    const usuario = {
//        metodo: "get",
//        username: "A",
//        nombre: "B",
//        role: "C"
//    };
//    res.json(usuario);
//});

// POST en la ruta raíz ('/')
//app.post('/', (req, res) => {
//    res.send('Hola, soy el método POST');
//});

// PUT en la ruta raíz ('/')
//app.put('/', (req, res) => {
//    res.send('Hola, soy el método PUT');
//});

//const Aleatorio = () => Math.floor(Math.random() * 1000) + 1;

// PATCH en la ruta raíz ('/')
//app.patch('/', (req, res) => {
//    const num = Aleatorio();
//    salida = {
//        metodo: "Hola, soy el método PATCH",
//        numero_aleatorio: num
//    }
//    res.json(salida);
//});

// DELETE en la ruta raíz ('/')
//app.delete('/', (req, res) => {
////    salida = {
//        metodo: "Hola, soy el método DELETE",
//        numero_aleatorio: num
//    }
//    res.json(salida);
//});


//app.listen(PORT, () => {
//  console.log(`Servidor corriendo en http://localhost:${PORT}`);
//});









//const express = require('express');
//import express from "express";
//const app = express();
//const port = 8000;
//"exports": "./index.js",

//"type": "module",
//"exports": "./index.js",

//const express = require('express')
//const app = express()
//const port = 3000
//var cors = require('cors')
//app.use(cors())
//app.use(express.urlencoded());
//app.use(express.json());

//app.listen(port,() => {
//    console.log(`Escucha app puerto ${port}`)
//})




//console.log('hola mundo');
//console.log('hola mundo');
//console.log('hola mundo');
//console.log("Adios");

//function hola(mensaje) {
  //  return `Hola ${mensaje}`;
//}
//console.log(hola('mundo'));

// Ruta raíz ('/') para mostrar la página HTML
//app.get('/', (req, res) => {
//    res.send(`
//        <!DOCTYPE html>
//        <html lang="es">
//        <head>
//            <meta charset="UTF-8">
//            <title>Pilates</title>
//            <style>
//                body {
//                    font-family: Arial, sans-serif;
//                    margin: 0;
//                    padding: 0;
//                    background-image: url('https://www.transparenttextures.com/patterns/flowers.png');
//                    background-color: #f3d1d1; /* rosa pastel */
//                    background-blend-mode: overlay;
//                }
//                h1, h2, h3 {
//                    color: #cc6699; /* rosa oscuro */
//                    text-align: center; /* Centrar los títulos h3 */
//                }
//                h1 {
//                    text-align: center;
//                }
//                h2 {
//                    color: #ff99cc; /* rosa claro */
//                }
//                h3 {
//                    color: #f8879b; /* rosa pastel */
//                }
//                p {
//                    color: #996666; /* marrón pastel */
//                }
//                ol {
//                    list-style-type: none;
//                    padding: 0;
//                }
//                li {
//                    margin-bottom: 10px;
//                }
//            </style>
//        </head>
//        <body>
//            <h1>PILATES</h1>
//            <h2>¿Qué es?</h2>
//            <p>El pilates es una disciplina que combina técnicas del ballet, yoga y gimnasia.</p>
//            <h2>Tipos de pilates</h2>
//            <ol>
//                <li>Mat</li>
//                <li>Reformer</li>
//                <li>Cadillac</li>
//                <li>Barrel</li>
//                <li>Silla</li>
//            </ol>
//        </body>
//        </html>
//    `);
//});// Ruta raíz ('/') para mostrar la página HTML
