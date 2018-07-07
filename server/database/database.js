const Sequelize = require('sequelize');
const config = require('../../sequelize.config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.localhost,
  dialect: config.dialect,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

module.exports = {sequelize};
