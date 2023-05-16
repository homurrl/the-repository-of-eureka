const {
    readFromFile,
    readAndAppend,
  } = require('../helpers/fsUtils');

const { v4: uuidv4 } = require('uuid');
const api = require('express').Router();


api.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  //post route

  api.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added succesfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
});
module.exports = api;