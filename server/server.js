const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

const matchController = require('./controllers/match')

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/getMatches', matchController.getMatches);
app.post('/addMatch', matchController.addMatch);
app.patch('/editMatch/:id', matchController.editMatch);
app.post('/removeMatch', matchController.removeMatch);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up on port 3000')
});
