const { TripService } = require('../services')

class TripController {

  static async getAll(req, res) {
    return res.send(await TripService.getAll(req.params.id));
  }
}

module.exports = TripController;
