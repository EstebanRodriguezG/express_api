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

app.listen(port, ()=>{

    console.log(`Example app listening port ${port}`)
})
