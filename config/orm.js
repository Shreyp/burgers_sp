var connection = require('../config/connection.js');

console.log("this works");

var orm = {
    create: function(tableInput, burger_nameInput, devouredInput, cb) {  
        var s = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) VALUES (?, ?)';
        connection.query(s, [burger_nameInput, devouredInput, 0], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(tableInput, colInput, idInput, cb) {
        var s = 'UPDATE ' + tableInput + ' SET visit_count = visit_count + 1  WHERE id = ?';
        connection.query(s, [idInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};
    
module.exports = orm;