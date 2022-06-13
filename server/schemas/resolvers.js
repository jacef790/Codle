const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const { JWT_SECRET } = require('../config/jwt');
const { Account, Comment, Word } = require('../models');
const jwt = require('jsonwebtoken')

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

                let data = {
                    time: Date.now(),
                    accountId: account._id,
                }

                const token = jwt.sign(data, JWT_SECRET);

                return { account, token };
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

            const account = await Account.create({
                username, password
            });

            let data = {
                time: Date.now(),
                accountId: account._id,
            }

            const token = jwt.sign(data, JWT_SECRET);

            return { account, token };

        },
        addComment: async (parent, { word, content }, context) => {
            if (!context.accountId) throw new AuthenticationError('invalid token');

            const data = await Comment.create({
                content,
                account: context.accountId,
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
        removeComment: async (parent, { word, comment }, context) => {

            if (!context.accountId) throw new AuthenticationError('invalid token');

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