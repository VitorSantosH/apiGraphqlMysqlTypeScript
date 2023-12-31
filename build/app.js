"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./graphql/schema");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
            schema: schema_1.default,
            graphiql: true
        }));
    }
}
exports.default = new App().express;
