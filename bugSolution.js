const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Sanitize userId to prevent injection attacks
  const sanitizedUserId = sanitize(userId); 
  // ... some database operation to fetch user data using sanitizedUserId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

function sanitize(input) {
  // Implement your sanitization logic here
  return input;
}
