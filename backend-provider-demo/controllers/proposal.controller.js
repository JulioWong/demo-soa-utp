const { ProposalService } = require('../services')

class ProposalController {

  static async getAll(req, res) {
    return res.send(await ProposalService.getAll());
  }

  static async newProposal(req, res) {
    return res.send(await ProposalService.createProposal(req));
  }
}

module.exports = ProposalController;