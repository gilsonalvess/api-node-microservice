const server = require('./api_config/server')
require('./api_config/database')
require('./api_config/routes')(server)