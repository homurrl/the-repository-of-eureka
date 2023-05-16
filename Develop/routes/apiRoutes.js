const {
    readFromFile,
  } = require('../helpers/fsUtils');

const api = require('express').Router();

api.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

module.exports = api;