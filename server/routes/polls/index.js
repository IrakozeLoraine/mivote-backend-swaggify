const { Router } = require('express');
const pollsController = require('../../controllers/poll.controller');
const { verifyToken } = require('../../middlewares/verifytoken');
const { registerDefinition } = require('swaggiffy');

const router = Router();

router.get('/', pollsController.getPolls);
router.post('/', verifyToken, pollsController.createPoll);
router.get('/:status', pollsController.getPollsByStatus);
router.post(`/candidate/vote`, verifyToken, pollsController.voteCandidate);

registerDefinition(router, {
  tags: 'polls',
  mappedSchema: 'Poll',
  basePath: '/api/v1/polls',
});

module.exports = router;
