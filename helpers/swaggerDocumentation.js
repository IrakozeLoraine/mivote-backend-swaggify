const userSchema = require('../routes/auth/auth.schema');
const authRouteDoc = require('../routes/auth/auth.doc');
const candidateSchema = require('../routes/candidate/candidate.schema');
const candidateRouteDoc = require('../routes/candidate/candidate.doc');
const pollSchema = require('../routes/polls/polls.schema');
const pollRouteDoc = require('../routes/polls/polls.doc');

const version = require('../package.json').version;

const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'MiVote REST API docs',
    version,
    description: 'A simple Voting system API for the community',
  },
  servers: [
    {
      url: 'http://localhost:4500',
      description: 'local dev',
    },
  ],
  tags: [
    {
      name: 'polls',
    },
    {
      name: 'candidates',
    },
    {
      name: 'auth',
    },
  ],
  paths: {
    ...pollRouteDoc,
    ...candidateRouteDoc,
    ...authRouteDoc,
  },
  components: {
    schemas: {
      ...pollSchema,
      ...userSchema,
      ...candidateSchema,
    },
  },
};

module.exports = swaggerDocumentation;
