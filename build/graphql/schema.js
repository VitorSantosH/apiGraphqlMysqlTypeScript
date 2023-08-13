"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'jon',
        email: 'jon@mail.com'
    },
    {
        id: 2,
        name: 'jony',
        email: 'jony@mail.com'
    }
];
const typeDefs = `
    type User {
        id: ID!,
        name: String!,
        email: String!
    }

    type Query {
        allUsers: [User!]
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;
const resolvers = {
    Query: {
        allUsers: () => {
            // console.log('aqui')
            return users;
        }
    },
    Mutation: {
        createUser: (parent, data) => {
            const newUser = Object.assign({ id: users.length + 1 }, data);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = (0, graphql_tools_1.makeExecutableSchema)({ typeDefs, resolvers });
