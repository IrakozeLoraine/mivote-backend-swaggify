const candidatesController = require('../../controllers/candidate.controller');
const { verifyToken } = require('../../middlewares/verifytoken');

const candidateEndpoint = '/api/v1/candidates';

module.exports = (app) => {
  app.post(
    candidateEndpoint,
    verifyToken,
    candidatesController.createCandidate
  );
  app.get(
    `${candidateEndpoint}/:poll_id`,
    candidatesController.getCandidatesByPoll
  );
};
