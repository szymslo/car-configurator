const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        cars: [Car!]!
    }

    type Car {
        id: ID!
        name: String!
        power: Int
    }
`;

module.exports = typeDefs;