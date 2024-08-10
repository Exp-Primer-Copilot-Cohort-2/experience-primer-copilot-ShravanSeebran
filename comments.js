// Create a web server
// Create a JSON file with some comments
// Create a route to serve the comments

// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Constants
const PORT = 3000;
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

// Create a server
const app = express();

// Serve the comments
app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});