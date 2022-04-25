const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//Metodos HTTP: GET, POST, PUT, DELETE

app.get('/v1/explorers',(req, res)=>{

    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "ESteban"}
    const explorer2 = {id: 2, name: "Jose"}
    const explorer3 = {id: 3, name: "Diana"}
    const explorers = [explorer1, explorer2, explorer3]

    // HTTP CODE STATUS: 200 - success
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req, res)=>{

    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "ESteban"}
    // HTTP CODE STATUS: 200 - success
    res.status(200).json(explorer1)
})

// Metodo POST usado para insertar Datos
app.post('/v1/explorers', (req, res)=>{

    // Agregar aqui la logica de persistencia de Datos

    console.log(`POST Explorers V1 API ${new Date()}`)

    console.log(req.body)

    res.status(201).json({result: "success", message: "Creado Existosamente"})


});



app.listen(port, ()=>{

    console.log(`Example app listening port ${port}`)
})
