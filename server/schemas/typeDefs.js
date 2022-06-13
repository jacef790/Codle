const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Account {
        username: String
        password: String
        comments: [Comment]!
        _id: ID!
    }

    type Comment {
        content: String
        account: Account
        word: Word
        _id: ID!
    }

    type Word {
        _id: ID!
      characters: String
      highScore: Int
      highScoreName: String
      comments: [Comment]!
    }

    type AuthData {
        account: Account
        token: String
    }

    type Query {
        words: [Word]!
        accounts: [Account]!
        comments(word: String): [Comment]!
        QueryLogin(username: String, password: String): AuthData
        word: Word
    }

    type Mutation {
        addWord(newWord: String): Word
        addAccount(username: String, password: String): AuthData
        addComment(word: String, content: String, account: String): Comment
        removeComment(word: String, comment: String): Comment
    }
`;

module.exports = typeDefs;