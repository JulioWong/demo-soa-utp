const {
  findAll,
  putItem
} = require('../models/proposal.model')

class ProposalService {

  static async getAll() {
    const execQuery = await findAll();
    const dataDB = Object.values(
      JSON.parse(JSON.stringify(execQuery))
    );

    return { quantity: dataDB.length, data: dataDB }
  }

  static async createProposal(data) {
    const request = data.body
    if (request && request.name && request.last_name && request.phone && request.address && 
          request.plate && request.brand && request.model && request.anio) {
      const execQuery = await putItem(
        [
          request.name, 
          request.last_name, 
          request.phone, 
          request.address,
          request.plate,
          request.brand,
          request.model,
          request.anio,
        ]);
      const dataDB = JSON.parse(JSON.stringify(execQuery));
      
      return {proposalId: dataDB.insertId};

    } else {
      return {error: "Request wrong!"}
    }
  }
}

module.exports = ProposalService;