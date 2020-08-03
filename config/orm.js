// Import MySQL connection.
const connection = require("../config/connection.js");


const orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, colname1, colname2, valcol1, valcol2) {
      var queryString = "INSERT INTO ?? () VALUES ()";
      console.log(queryString);
      connection.query(queryString, [tableInput, colname1, colname2, valcol1,valcol2], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableInput, colname1, valcol1, colname2, valcol2) {
      var queryString =
        "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
  
      connection.query(
        queryString,
        [tableInput, colname1, valcol1, colname2, valcol2],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  