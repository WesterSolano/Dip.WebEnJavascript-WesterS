const express = require('express')
const app = express()
 
app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/listadoClientes', function(req, res) {
    res.sendFile(__dirname + "/listadoClientes.html")
})


app.listen(3100)
console.log("Express esta corriendo en el puerto: 3100");
console.log("http://localhost:3100")