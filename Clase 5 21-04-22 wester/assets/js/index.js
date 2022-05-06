/*To set working directory: => commands
  npm init -y
  npm install express*/
//-Agregamos dependencia de express
const express = require('express')
//-arrancamos a express
const app = express()
//agregamos el puerto a utilizar
const port = 8081 //Settings
//app.set('port', process.env.PORT || 3000)

//Exponemos carpeta para q refleje sus cambios
//app.use(express.static('assets'));

//agregamos ruta al servidor web express
app.get('/', (req, res) => {
    res.send('Hello World.')
  })
  
/*app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})*/

app.listen(8081);