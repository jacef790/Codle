const express = require('express');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const path = require('path');
const jwt = require('jsonwebtoken')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { JWT_SECRET } = require('./config/jwt');
const { Account } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: ({ req }) => {

        try {
            token = /^Bearer (.*)$/.exec(req.headers.authorization)[1]
            const decoded = jwt.verify(token, JWT_SECRET);
            return { accountId: decoded.accountId }
        } catch (err) {
            console.error(err);
        }

        return {};
    },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(typeDefs, resolvers);

