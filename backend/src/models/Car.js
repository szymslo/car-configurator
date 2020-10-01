const mongoose = require("mongoose");

const Car = mongoose.model("Car", {name: String, power:Number});

module.exports = Car;