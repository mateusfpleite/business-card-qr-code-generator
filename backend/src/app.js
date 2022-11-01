const express = require('express');
const CardController = require('./Controller');

const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());

const cardController = new CardController();

app.get('/card/:name', cardController.getCardByName)
app.post('/card', cardController.createCard);

module.exports = app;