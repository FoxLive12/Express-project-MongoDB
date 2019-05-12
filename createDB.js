var mongoose = require('mongoose');
var uri = "mongodb+srv://admin:qwerty12@express-3lqzs.mongodb.net/test?retryWrites=true";
var uri = uri.replace("test", "Express");

mongoose.connect('mongodb://localhost:27017/all', { useNewUrlParser: true });
var async = require('async')
var Game = require('./models/game').Game;
// очистим бд
// вставим три игры
// закроем соединение с бд
function open(callback) {
  mongoose.connection.on('open', callback)
}

function dropDB(callback) {
  var db = mongoose.connection.db
  db.dropDatabase(callback)
}

function insertGame(callback) {
  async.parallel([
    function (callback) {
      var TWD = new Game({
        name: "TWD"
      })
      TWD.save(function (err, TWD) {
        callback(err, "TWD")
      })
    },
    function (callback) {
      var SOTTR = new Game({
        name: "SOTTR"
      })
      SOTTR.save(function (err, SOTTR) {
        callback(err, "SOTTR")
      })
    },
    function (callback) {
      var WHF = new Game({
        name: "WHF"
      })
      WHF.save(function (err, WHF) {
        callback(err, "WHF")
      })
    },
    function (callback) {
      var JC = new Game({
        name: "JC"
      })
      JC.save(function (err, JC) {
        callback(err, "JC")
      })
    },
    function (callback) {
      var RDR = new Game({
        name: "RDR"
      })
      RDR.save(function (err, RDR) {
        callback(err, "RDR")
      })
    }
  ],
    function (err, result) {
      callback(err)
    })
}
function close(callback) {
  mongoose.disconnect(callback)
}

async.series([
  open,
  dropDB,
  insertGame,
  close
],
  function (err, result) {
    if (err) throw err
    console.log("OK!!!")
  }
)
