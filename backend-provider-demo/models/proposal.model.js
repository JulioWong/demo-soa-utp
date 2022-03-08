const query = require('../config')

class ProposalModel {

  static async findAll() {
    return await query('SELECT * FROM proposal')
  }

  static async putItem(row) {
    return await query(
      'INSERT INTO proposal(name, last_name, phone, address) VALUES (?, ?, ?, ?)', 
      row
    )
  }
}

module.exports = ProposalModel;