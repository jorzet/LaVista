/**
 * index.js
 * Script donde se declara la dirección raiz (/). 
 * Autor: Oscar Martín Arcos Román
 */


// Declaración de requerimientos
const express = require('express');
const router = express.Router();
var path = require('path');

// Página principal
router.get('/', (req, res) => {
    res.render('index.html');
});


// Exportar modulo
module.exports = router;