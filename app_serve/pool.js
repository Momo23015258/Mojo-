const mysql = require("mysql");
var pool = mysql.createPool({
     host:"127.0.0.1",
     port:3340,
     user:"root",
     password:"",
     database:"KW",
     connectionLimit:15
});
module.exports = pool;