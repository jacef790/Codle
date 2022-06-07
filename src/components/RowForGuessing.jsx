import React from 'react';

//word is the string pulled straight from the database
//typedLetters is array
//isSubmitted is boolean
const rowForGuessing = ({ word, typedLetters, isSubmitted }) => {
    let upperWord = word.toUpperCase();

    let letterArray = upperWord.split('');

    return (
        <div>
            {letterArray.map((el, i) => {
                return (
                    <div>
                        <LetterBox letterArray={letterArray} typedLetter={typedLetters[i]} isSubmitted={isSubmitted} boxIndex={i} />
                    </div>
                )

            })}
        </div>
    )

};

export default rowForGuessing