const Sequelize = require('sequelize');
const sqlConfig = require('./sequelize.config.js');

const sequelize = new Sequelize(sqlConfig.database, sqlConfig.username, sqlConfig.password, {
  host: sqlConfig.localhost,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

module.exports = {sequelize};
