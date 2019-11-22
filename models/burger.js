// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
        cb(res);
        });
    },
    // Create a new burger
    create: function(name, devoured, cb) {
        orm.insertOne("burgers", name, devoured, function(res) {
        cb(res);
        });
    },
    //  Update an exsting burger
    update: function(name, devoured, cb) {
        orm.updateOne("burgers",name, devoured, function(res) {
        cb(res);
        });
    }
};

// Export the database functions for the controller.
module.exports = burger;