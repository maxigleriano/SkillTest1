const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>  {
    res.send(`
    <h1>RESPUESTAS</h1>

    <h2>1. Definir:</h2> 
    <ul>
        <li><b>JavaScript:</b> es un lenguaje de programación orientado a objetos y débilmente tipado, que se utiliza en el desarrollo de páginas web para crear sitios más dinámicos.</li>
        <li><b>Node:</b> es entorno de ejecución de JavaScript que permite utilizar JavaScript en el lado del servidor.</li>
        <li><b>Backend:</b> es la parte que hace que una página web funcione. Se encarga de procesar la información que encesita el frontend para funcionar.</li>
        <li><b>Frontend:</b> es la parte del desarrollo web que se dedica al diseño del sitio.</li>
    </ul>

    <h2>2. Nombrar todos los tipos de datos vistos y un uso para cada uno.</h2>
    <ul>
        <li><b>Number:</b> es un tipo de dato numérico.</li>
        <li><b>Boolean:</b> es un dato lógico que solo puede tener los valores true o false.</li>
        <li><b>BigInt:</b> es un tipo de dato numerico que puede representar números enteros en el formato de precision arbitraria.</li>
        <li><b>String:</b> es una secuencia de caracteres usada para representar un texto.</li>
        <li><b>Undefined:</b> es un valor automáticamente asignado a las variables que solo han sido declaradas.</li>
        <li><b>Symbol:</b> es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.</li>
    </ul>

    <h2>3. ¿Qué es el package.json? ¿Qué es una dependencia? ¿Y una dependencia de desarrollo?</h2>
    <p>El package.json es un archivo en el que se guarda información importante sobre el proyecto. En el se encuentran listadas todas las dependencias neceserias para que la aplicación funcione correctamente.</p>
    <p>Una dependencia es un paquete externo que contiene código que realiza una función específica. Se utilizan para crear soluciones reutilizables.</p>
    <p>Las dependencias de desarrollo son aquellos paquetes que necesitamos en un proyecto mientras estamos desarrollándolo, pero una vez tenemos el proyecto final, no vuelven a hacer falta.</p>
    <h2>4. Nombrar 3 métodos de array y su función.</h2>
    <ul>
        <li><b>array.push():</b> añade un elemento al final del array.</li>
        <li><b>array.pop():</b> elimina el último elemento de un array</li>
        <li><b>array.shift():</b> elimina el primer elemento de un array</li>
    </ul>

    <h2>5. ¿Qué es el asincronismo? Cómo se implementa en Javascript?</h2>
    <p>El asincronismo es una manera de ejecutar el código en la que la ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado inmediatamente.</p>
    `)
})

module.exports = router