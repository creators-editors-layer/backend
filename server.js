const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all origins (adjust for production)
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});