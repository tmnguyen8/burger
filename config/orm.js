
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, callBack) {
    var queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },

  insertOne: function(table, name, devoured, cb) {
    var queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES(?, ?)`;

    console.log(queryString);

    connection.query(queryString, [name, devoured], function(err, result) {
      if (err) {
        throw err;
      }

      callBack(result);
    });
  },

  updateOne: function(table, name, devoured, callBack) {
    var queryString = `UPDATE ${table} SET devoured=${devoured} WHERE name=${name}`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callBack(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
