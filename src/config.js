require('dotenv').config()
const args = require("yargs/yargs")(process.argv.slice(2)).alias({
    u: 'user',
    p: 'password'
}).default({
    port: 8080
}).argv

module.exports = {
    port: args.port, 
    sessionsecret: process.env.SESSIONSECRET || 'coderproject',
    mongoconnect: process.env.MONGOCONNECT || ``, //<---- Ingrese base de datos de mongo dentro de las comillas porfavor
}