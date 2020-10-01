const Car = require("./models/Car");

const resolvers = {
    Query: {
        cars: () => Car.find()
    }
};

module.exports = resolvers;