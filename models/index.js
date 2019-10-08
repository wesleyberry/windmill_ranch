"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
if (env === "production") {
  var sequelize = new Sequelize(
    process.env.database,
    process.env.username1,
    process.env.password1,
    {
      "username":process.env.username1,
      "password":process.env.password1,
      "database":process.env.database,
      "dialect": "mysql",
      "host":process.env.host,
      "port":process.env.port2
    }
  );
} else if (env === "development"){
//   var sequelize = new Sequelize(
//     process.env.db_database,
//     process.env.db_user,
//     process.env.db_password,
//     {
//       "username":process.env.db_user,
//       "password":process.env.db_password,
//       "database":process.env.db_database,
//       "dialect": "mysql",
//       "host":process.env.db_host,
//       "port":process.env.db_port
//     }
//   )
// } else {
  var sequelize = new Sequelize(
    process.env.database,
    process.env.username1,
    process.env.password1,
    {
      "username":process.env.username1,
      "password":process.env.password1,
      "database":process.env.database,
      "dialect": "mysql",
      "host":process.env.host,
      "port":process.env.port2
    }
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;