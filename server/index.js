require('dotenv').config();

const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const { Swaggiffy } = require('swaggiffy');

const port = process.env.NODE_DOCKER_PORT || 4500;

new Swaggiffy().setupExpress(app).swaggiffy();

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
