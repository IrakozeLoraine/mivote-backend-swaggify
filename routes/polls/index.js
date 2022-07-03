const pollsController = require('../../controllers/poll.controller');
const { verifyToken } = require('../../middlewares/verifytoken');

const endpoint = '/api/v1/polls';

module.exports = (app) => {
  app.get(endpoint, pollsController.getPolls);
  app.post(endpoint, verifyToken, pollsController.createPoll);
  app.get(`${endpoint}/:status`, pollsController.getPollsByStatus);
  app.post(
    `${endpoint}/candidate/vote`,
    verifyToken,
    pollsController.voteCandidate
  );
};
