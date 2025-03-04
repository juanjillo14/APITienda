const exp = require('express')
require('dotenv').config();
const enrutador = require('./routes/router')

const app = exp();

//app.get()

app.use('/v1/',enrutador)

app.listen(process.env.PORT, ()=> {
    console.log('Server escuchando en el puerto' + process.env.PORT);
})
