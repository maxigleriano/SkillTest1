const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`
        <h1>Hola pepa!</h1>
        <p>Bienvenida a tu servidor bien piola!</p>`)
})

module.exports = router