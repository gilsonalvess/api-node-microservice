
const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const clienteService = require('../api/cliente/clienteService')
    clienteService.register(router, '/clientes')

}