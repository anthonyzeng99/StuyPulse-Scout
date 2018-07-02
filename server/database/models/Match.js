const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define('match', {
    teamNumber: Sequelize.STRING,
    matchType: Sequelize.STRING,
    matchNumber: Sequelize.INTEGER,
    scoutName: Sequelize.STRING,
    mobility: Sequelize.BOOLEAN,
    autoAttempt: Sequelize.STRING,
    autoSwitch: Sequelize.STRING,
    autoScale: Sequelize.STRING,
    allianceSwitch: Sequelize.INTEGER,
    scaleScored: Sequelize.INTEGER,
    scaleDropped: Sequelize.INTEGER,
    opposingScale: Sequelize.INTEGER,
    exchangeScored: Sequelize.INTEGER,
    climb: Sequelize.STRING,
    climbAssists: Sequelize.INTEGER,
    comments: Sequelize.STRING
  })
);
