require('./config/db').connect();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

require('./routes/polls')(app);
require('./routes/auth')(app);
require('./routes/candidate')(app);

module.exports = app;
