const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define('match', {
    teamNumber: Sequelize.INTEGER,
    teamName: Sequelize.STRING
  })
);
