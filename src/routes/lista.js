const express = require('express')
const router = express.Router()

const fs = require('fs')

router.get('/', (req, res) => {
    let jsonFile = fs.readFileSync('src/listasCompras.json')
    let jsonObject = JSON.parse(jsonFile)

    let listas = jsonObject.listas
    let response = []

    listas.forEach(e => {
        if(e.id % 2 == 0) {
            response.push(e)
        }
    });

    res.json(response)
})

module.exports = router;