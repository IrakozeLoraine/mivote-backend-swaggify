const { Router } = require('express');
const candidatesController = require('../../controllers/candidate.controller');
const { verifyToken } = require('../../middlewares/verifytoken');
const { registerDefinition } = require('swaggiffy');

const router = Router();

router.post('/', verifyToken, candidatesController.createCandidate);
router.get('/:poll_id', candidatesController.getCandidatesByPoll);

registerDefinition(router, {
  tags: 'candidates',
  mappedSchema: 'Candidate',
  basePath: '/api/v1/candidates',
});

module.exports = router;
