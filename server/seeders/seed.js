const Word = require('../models/Word');
//also stores high score and username of high score
//word, high score, high score name, key

const Account = require('../models/Account');
//username, password, key

const Comment = require('../models/Comment');
//account association, word association, content

const db = require('../config/connection');
const wordSeed = require('./wordSeed.json');

db.once('open', async () => {

    await Word.deleteMany({});

    const words = await Word.insertMany(wordSeed.map((word) => {
        return { characters: word }
    }));
    console.log('got this far3')
    console.log('Words have been seeded!');
    process.exit(0);
});