const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        account:
        {
            type: Schema.Types.ObjectId,
            ref: 'Account'
        },
        word:
        {
            type: Schema.Types.ObjectId,
            ref: 'Word'
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;