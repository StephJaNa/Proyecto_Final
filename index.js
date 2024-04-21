const express = require('express');
const app = express();
const port = 8000;

// Establecer el código de estado 200 en todas las respuestas
app.use((req, res, next) => {
  res.status(200);
  next();
});

// GET Ruta raíz ('/') para devolver un objeto JSON - formato postman
app.get('/', (req, res) => {
    const usuario = {
        metodo: "get",
        username: "A",
        nombre: "B",
        role: "C"
    };
    res.json(usuario);
});

// POST en la ruta raíz ('/') - texto plano
app.post('/', (req, res) => {
    res.send('Hola, soy el método POST');
});

// PUT en la ruta raíz ('/') - texto plano
app.put('/', (req, res) => {
    res.send('Hola, soy el método PUT');
});

const Aleatorio = () => Math.floor(Math.random() * 1000) + 1;

// PATCH en la ruta raíz ('/') - num al
app.patch('/', (req, res) => {
    const num = Aleatorio();
    salida = {
        metodo: "Hola, soy el método PATCH",
        numero_aleatorio: num
    }
    res.json(salida);
});

// DELETE en la ruta raíz ('/') - num al
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
