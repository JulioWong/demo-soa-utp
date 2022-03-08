const query = require('../config')

class TripModel {

  static async findAll() {
    return await query('SELECT * FROM trips')
  }
}

module.exports = TripModel;