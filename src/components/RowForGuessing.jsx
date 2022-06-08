import React from 'react';
import LetterBox from './LetterBox';

//word is the string pulled straight from the database
//typedLetters is array
//isSubmitted is boolean
const RowForGuessing = ({ word, typedLetters, isSubmitted }) => {
    let upperWord = word.toUpperCase();

    let letterArray = upperWord.split('');

    return (
        <div>
            {letterArray.map((el, i) => {
                return (
                    <div className="flex flex-col">
                        <LetterBox letterArray={letterArray} typedLetter={typedLetters[i]} isSubmitted={isSubmitted} boxIndex={i} />
                    </div>
                )

            })}
        </div>
    )

};

export default RowForGuessing