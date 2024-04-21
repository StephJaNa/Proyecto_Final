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
    res.send(username);
});

// PUT en la ruta raíz ('/')
app.put('/', (req, res) => {
    username = 'Hola, soy el método PUT'
    res.send(username);
});

const Aleatorio = () => Math.floor(Math.random() * 1000) + 1;

// PATCH en la ruta raíz ('/')
app.patch('/', (req, res) => {
    const num = Aleatorio();
    salida = {
        metodo: "Hola, soy el método PATCH",
        numero_aleatorio: num
    }
    res.json(salida);
});

// DELETE en la ruta raíz ('/')
app.delete('/', (req, res) => {
    const num = Aleatorio();
    salida = {
        metodo: "Hola, soy el método DELETE",
        numero_aleatorio: num
    }
    res.json(salida);
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
