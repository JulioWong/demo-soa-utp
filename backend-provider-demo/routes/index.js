const router = require("express").Router();

const {
  ProposalController,
  TripController
} = require('../controllers')

module.exports = app => {
  router.get("/proposal", ProposalController.getAll);

  router.get("/proposal/:id/trips", TripController.getAll);

  router.post("/proposal", ProposalController.newProposal);

  app.use('/api', router);
};
