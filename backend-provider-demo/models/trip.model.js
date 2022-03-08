const query = require('../config')

class TripModel {

  static async findAll(id) {
    return await query('SELECT * FROM trips WHERE proposalid = ?', [id])
  }
}

module.exports = TripModel;
