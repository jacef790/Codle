const Word = require('../models');
const Account = require('../models');
const Comment = require('../models');

const resolvers = {
    Query: {
        words: async () => {
            return Word.find();
        },
        accounts: async() => {
            return Account.find();
        },
        comments: async() => {
            return Comment.find();
        },
        account: async() => {
            return Account.findOne({ username: username });
        },
    },

    Mutation: {
        addWord: async (parent, { word }) => {
            return Words.create({ word });
        },
        addAccount: async (parent, { username }) => {
            return Account.create({ username });
        },
        addComment: async (parent, { word, comment }) => {
            return Comment.findOneAndUpdate(
                { word: word },
                { $addToSet: { content: comment } },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeComment: async (parent, { word, comment }) => {
            return Comment.findOneAndUpdate(
                { word: word },
                { $pull: { content: comment } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;