var mongoose = require('mongoose');
var gameShema = mongoose.Schema({
  title: String,
  name: {
    type: String,
    unique: true,
    required: true
  },
  pictures: String,
  text: String,
  created: {
    type: Date,
    default: Date.now()
  }
})

module.exports.Game = mongoose.model("Game", gameShema)