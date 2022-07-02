const authController = require('../../controllers/auth.controller');

const authEndpoint = '/api/v1/auth';

module.exports = (app) => {
  app.post(`${authEndpoint}/register`, authController.register);
  app.post(`${authEndpoint}/login`, authController.login);
};
