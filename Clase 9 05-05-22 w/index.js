const express = require('express')
 const app = express()

 app.use(express.static('assets'));

// 4 - Agrega ruta con plantilla HTML
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

// 5 - Agregar el puerto que usara express
app.listen(3000)