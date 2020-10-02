const mongoose = require("mongoose");

const Engine = mongoose.model("Engine", {name: String, horsepower:Number, capacity:Number});

module.exports = Engine;