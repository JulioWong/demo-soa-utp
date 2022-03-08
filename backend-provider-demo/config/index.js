const mysql = require("mysql");
const dbConfig = require("./db");

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

const query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
  pool.getConnection(function(err, connection) {
    if (err) {
      reject( err )
    } else {
      connection.query(sql, values, ( err, rows) => {

        if ( err ) reject( err )
        else {
          resolve( rows )
        }

        connection.release()
      })
    }
  })
  })
}

module.exports = query