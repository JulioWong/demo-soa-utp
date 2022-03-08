const {
  findAll,
} = require('../models/trip.model')

const format = require('date-format');


class TripService {

  static async getAll() {
    const execQuery = await findAll();
    const dataDB = Object.values(
      JSON.parse(JSON.stringify(execQuery))
    );

    const newData = [];
    let total = 0;

    for (const trip of dataDB) {
      total += trip.km

      newData.push({
        km: trip.km,
        date: format('dd/MM/yyyy', new Date(trip.datetime_since)),
        since: new Date(trip.datetime_since).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        until: new Date(trip.datetime_until).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      })
    }

    return { totalKm: total, data: newData }
  }
}

module.exports = TripService;