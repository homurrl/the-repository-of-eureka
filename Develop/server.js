const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//post route

app.post('/notes', (req, res) => {
  // Get the data from the request body
  const data = req.body;

  // Do something with the data
  // For example, you could save it to a database

  // Send a response back to the client
  res.json({
    message: 'Your feedback has been submitted!'
  });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
