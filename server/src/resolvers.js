const Car = require("./models/Car");
const Engine = require("./models/Engine");

const resolvers = {
    Query: {
        cars: () => Car.find(),
        car: (_, args) => Car.findById(args.id),
        engines: () => Engine.find(),
        engine: (_, args) => Engine.findById(args.id)
    }
};

module.exports = resolvers;