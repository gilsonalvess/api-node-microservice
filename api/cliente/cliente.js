const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
    cpf: { type: String, required: true },
    nome: { type: String, required: true }
})

module.exports = restful.model('Cliente', clienteSchema)