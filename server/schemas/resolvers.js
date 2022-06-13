const { Account, Comment, Word } = require('../models');

const resolvers = {
    Query: {
        words: async () => {
            return Word.find();
        },
        accounts: async () => {
            return Account.find();
        },
        comments: async (parent, { word }) => {
            return Comment.find({ word: word }).populate('account');
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
        addComment: async (parent, { word, content, account }) => {

            const data = await Comment.create({
                content,
                account,
                word
            })

            return Word.findByIdAndUpdate(
                word,
                {
                    $addToSet: {
                        comments: data

                    }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeComment: async (parent, { word, comment }) => {


            await Word.findByIdAndUpdate(
                word,
                {
                    $pull: {
                        comments: comment

                    }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

            await Comment.deleteOne({
                _id: comment
            })

            return { _id: comment }
        },
    },
};

module.exports = resolvers;