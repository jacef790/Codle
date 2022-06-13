const { Account, Comment, Word } = require('../models');

const resolvers = {
    Query: {
        words: async () => {
            return Word.find();
        },
        accounts: async () => {
            return Account.find();
        },
        comments: async () => {
            return Comment.find();
        },
        QueryLogin: async (parent, { username, password }) => {

            const account = await Account.findOne({ username }).exec()

            if (account && await account.isCorrectPassword(password)) {
                return account;
            } else {
                return null;
            };
        },
        word: async () => {
            let num = Math.floor(Math.random() * 100);

            return Word.findOne().skip(num);
        },
    },

    Mutation: {
        addWord: async (parent, { newWord }) => {
            return Word.create({ newWord });
        },
        addAccount: async (parent, { username, password }) => {
            return Account.create({
                username, password
            });
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