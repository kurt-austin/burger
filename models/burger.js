const orm = require("./config/orm.js");


orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name","devoured","Big Mac", "True");


orm.updateOne("burgers", "devoured", "false", "Big Mac");











module.exports = burger;