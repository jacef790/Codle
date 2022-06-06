const { Schema, model } = require('mongoose');

const wordSchema = new Schema(
    {
        characters: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        highScore: {
            type: Number
        },
        highScoreName: {
            type: String
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }
);

const Word = model('Word', wordSchema);

module.exports = Word;
