// Create web server
// 1. Create a web server
// 2. Create a route for the path /comments
// 3. Send a response with a status code of 200 and the message "This is the comments page"
// 4. Start the web server on port 3000

// Create a web server
const express = require('express');
const app = express();

// Create a route for the path /comments
app.get('/comments', (req, res) => {
  res.status(200).send('This is the comments page');
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});