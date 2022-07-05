const { Router } = require('express');
const { registerDefinition } = require('swaggiffy');
const authController = require('../../controllers/auth.controller');

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

registerDefinition(router, {
  tags: 'auth',
  mappedSchema: 'auth',
  basePath: '/api/v1/auth',
});

module.exports = router;
