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
    }

    type Word {
        _id: ID!
      characters: String
      highScore: Int
      highScoreName: String
      comments: [Comment]!
    }

    type Query {
        words: [Word]!
        accounts: [Account]!
        comments(word: String): [Comment]!
        QueryLogin(username: String, password: String): Account
        word: Word
    }

    type Mutation {
        addWord(newWord: String): Word
        addAccount(username: String, password: String): Account
        addComment(word: String, content: String, account: String): Comment
        removeComment(word: String, comment: String): Comment
    }
`;

module.exports = typeDefs;