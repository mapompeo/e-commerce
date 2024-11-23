const express = require('express');
const router = express.Router();
const controllerCliente = require('../controller/controllerCliente');

router.post('/cadastrar', controllerCliente.cadastrar);
router.post('/entrar', controllerCliente.login);

module.exports = router;