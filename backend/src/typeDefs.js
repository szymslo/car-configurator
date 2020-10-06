const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        cars: [Car!]!,
        engines: [Engine!]!
    }

    type Car {
        id: ID!
        name: String!
        power: Int!
        price: Int!
    }

    type Engine {
        id: ID!
        name: String!
        horsepower: Int!
        capacity: Float!
        price: Int!
    }
`;

module.exports = typeDefs;