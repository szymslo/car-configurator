const Car = require("./models/Car");
const Engine = require("./models/Engine");

const resolvers = {
    Query: {
        cars: () => Car.find(),
        engines: () => Engine.find()
    }
};

module.exports = resolvers;