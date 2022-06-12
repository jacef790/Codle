const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Account {
        username: String
        password: String
        comments: [Comment]!
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
        comments: [Comment]!
        account(username: String): Account
        word: Word
    }

    type Mutation {
        addWord(newWord: String): Word
        addAccount(username: String, password: String): Account
        addComment(word: String, comment: String): Comment
        removeComment(word: String, comment: String): Comment
    }
`;

module.exports = typeDefs;