const express = require('express');
const logger = require('./utils/logger');


const app = express();

app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/error', (req, res) => {
  logger.error('An error occurred on /error');
  res.status(500).send('Something went wrong');
});

const port = 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
