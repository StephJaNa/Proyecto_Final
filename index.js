const express = require('express');
const app = express();
const port = 8000;

// Middleware para establecer el código de estado 200 en todas las respuestas
app.use((req, res, next) => {
  res.status(200);
  next();
});

// GET Ruta raíz ('/') para devolver un objeto JSON
app.get('/', (req, res) => {
    // Objeto JSON que quieres enviar como respuesta
    const usuario = {
        metodo: "get",
        username: "A",
        nombre: "B",
        role: "C"
    };

    // Enviar el objeto JSON como respuesta
    res.json(usuario);
});

// POST en la ruta raíz ('/')
app.post('/', (req, res) => {
    username = 'Hola, soy el método POST'
    res.json(username);
});

// PUT en la ruta raíz ('/')
app.put('/', (req, res) => {
    username = 'Hola, soy el método PUT'
    res.json(username);
});

// PATCH en la ruta raíz ('/')
app.patch('/', (req, res) => {
    username = 'Hola, soy el método PATCH'
    res.json(username);
});

// DELETE en la ruta raíz ('/')
app.delete('/', (req, res) => {
    username = 'Hola, soy el método DELETE'
    res.json(username);
});

// OPTIONS en la ruta raíz ('/')
app.options('/', (req, res) => {
    username = 'Hola, soy el método OPTIONS'
    res.json(username);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



//const express = require('express')
//const app = express()
//const port = 3000
//var cors = require('cors')
//app.use(cors())
//app.use(express.urlencoded());
//app.use(express.json());

//app.listen(port,() => {
//    console.log(`Example app listening on port ${port}`)
//})




//console.log('hola mundo');
//console.log('hola mundo');
//console.log('hola mundo');
//console.log("Adios");

//function hola(mensaje) {
  //  return `Hola ${mensaje}`;
//}
//console.log(hola('mundo'));