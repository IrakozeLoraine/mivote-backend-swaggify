const pollsController = require('../../controllers/poll.controller');

const endpoint = '/api/v1/polls';

module.exports = (app) => {
  app.get(endpoint, pollsController.getPolls);
  app.post(endpoint, pollsController.createPoll);
  app.get(`${endpoint}/:status`, pollsController.getPollsByStatus);
  app.post(`${endpoint}/candidate/vote`, pollsController.voteCandidate);
};
