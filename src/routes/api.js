const express = require('express')
const router = express.Router()

const axios = require('axios');

//Funcion para traer los datos de la api
const getData = async () => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/image/random')
    } catch (error) {
        return null;
    }
}

router.get('/', async (req, res) => {
    let data = await getData()

    if(data) {
        console.log(data.data);
        res.json(data.data)
    } else {
        res.send('salio mal xd')
    }
})

module.exports = router




