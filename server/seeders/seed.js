const Word = require('./Word');
//also stores high score and username of high score
//word, high score, high score name, key

const Account = require('./Account');
//username, password, key

const Comment = require('./Comment');
//account association, word association, content

const db = require('../config/connection');
const wordSeed = require('./wordSeed.json');

db.once('open', async () => {
    await Word.deletemany({});

    const words = await Word.insertMany(wordSeed);

    console.log('Words have been seeded!');
    process.exit(0);
});