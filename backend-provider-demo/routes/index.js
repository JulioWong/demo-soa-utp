const router = require("express").Router();

const {
  ProposalController
} = require('../controllers')

module.exports = app => {
  router.get("/proposal", ProposalController.getAll);

  router.post("/proposal", ProposalController.newProposal);

  app.use('/api', router);
};
