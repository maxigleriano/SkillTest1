const express = require('express')
const app = express()
const morgan = require('morgan')

const respuestasRoutes = require('./routes/respuestas.js')
const jsonRoutes = require('./routes/json.js')
const listaRoutes = require('./routes/lista.js')
const apiRoutes = require('./routes/api.js')
const holaRoutes = require('./routes/hola.js')

app.set('port', process.env.PORT || 3000)

app.use(morgan('tiny'))

//Preguntas y respuestas
app.use('/', respuestasRoutes)
//Ruta 1
app.use('/json', jsonRoutes)
//Ruta 2
app.use('/lista', listaRoutes)
//Ruta 3
app.use('/api', apiRoutes)
//Ruta 4
app.use('/hola', holaRoutes)

app.use((req, res, next) => {
    res.status(404).send('No se encontro la pagina')
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
})