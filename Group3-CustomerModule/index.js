const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/clientes', function(req, res) {
    res.sendFile(__dirname + "/views/customer.html")
})
app.get('/listado-clientes', function(req, res) {
    res.sendFile(__dirname + "/views/lista-clientes.html")
})

app.get('/editar-cliente', function(req, res) {
    res.sendFile(__dirname + "/views/editarCliente.html")
})


app.listen(3100)
console.log("Express esta corriendo en el puerto: 3100");
console.log("http://localhost:3100")