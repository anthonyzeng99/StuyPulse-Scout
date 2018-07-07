const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const {sequelize} = require('./database/database');
const Match = sequelize.import(__dirname + "/database/models/Match");
const Team = sequelize.import(__dirname + "/database/models/Team");

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/getMatches', async (req, res) => {
  const matches = await Match.findAll();
  res.status(200).send(matches);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/addMatch', (req, res) => {
  sequelize.sync()
    .then(() => Match.create(req.body))
    .then(match => {
      console.log(match.toJSON());
    });
  res.status(200).send(req.body);
});

app.patch('/editMatch/:id', async (req, res) => {
  const match = await Match.findById(req.body.id);
  if (match != null) {
    match.updateAttributes(req.body);
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

app.post('/removeMatch', async (req, res) => {
  const match = await Match.findById(req.body.id);
  if (match != null) {
    match.destroy();
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log('Server is up on port 3000')
});
