const express = require('express')
const router = express.Router()

const fs = require('fs')

router.get('/', (req, res) => {
    let jsonFile = fs.readFileSync('src/listasCompras.json')
    let listas = JSON.parse(jsonFile)

    res.json(listas)
})

module.exports = router