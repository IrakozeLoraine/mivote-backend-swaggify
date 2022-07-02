const candidatesController = require('../../controllers/candidate.controller');

const candidateEndpoint = '/api/v1/candidates';

module.exports = (app) => {
  app.post(candidateEndpoint, candidatesController.createCandidate);
  app.get(
    `${candidateEndpoint}/:poll_id`,
    candidatesController.getCandidatesByPoll
  );
};
