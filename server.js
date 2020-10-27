const app = require('express')();
const bodyparser = require('body-parser');
require('dotenv').config();

// DATOS DEL SERVIDOR
const PORT = process.env.PORT || 8081;        // Puerto
const HOST = process.env.HOST || '127.0.0.1';   // IP del servidor

// MIDDLEWARES
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// RUTAS
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Escuchando en http://${HOST}:${PORT}`)
})