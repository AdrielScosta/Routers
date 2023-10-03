const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000

const userRoute = require('./routes/User')

app.use('/', userRoute)

app.listen(PORT, ()=>{
    console.log("Conectado com sucesso")
})