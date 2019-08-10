//Creating connection to database, creating instances of models and defining relationships if applicable
const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const teamsModel = require('./teams')

const config = allConfigs['development']

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
})

const teams = teamsModel(connection, Sequelize)

module.exports = {
    teams
}