const {sequelize} = require('../database/database');
const Match = sequelize.import(__dirname + "/../database/models/Match");

var matchController = {};

matchController.getMatches = [
  async (req, res) => {
    const matches = await Match.findAll();
    res.status(200).send(matches);
  }
]

matchController.addMatch = [
  (req, res) => {
    sequelize.sync()
      .then(() => Match.create(req.body))
      .then(match => {
        console.log(match.toJSON());
      });
    res.status(200).send(req.body);
  }
]

matchController.editMatch = [
  async (req, res) => {
    const match = await Match.findById(req.body.id);
    if (match != null) {
      match.updateAttributes(req.body);
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  }
]

matchController.removeMatch = [
  async (req, res) => {
    const match = await Match.findById(req.body.id);
    if (match != null) {
      match.destroy();
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  }
]

module.exports = matchController;
