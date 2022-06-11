import React from 'react';
import LetterBox from './LetterBox';

//word is the string pulled straight from the database
//typedLetters is array
//isSubmitted is boolean
const RowForGuessing = ({ word, typedLetters, isSubmitted }) => {
    let upperWord = word.toUpperCase();

    let letterArray = upperWord.split('');

    return (
        <div className='flex justify-center pt-5'>
            {letterArray.map((el, i) => {
                return (
                    <div key={i} className="flex justify-center items-center">
                        <LetterBox letterArray={letterArray} typedLetter={typedLetters[i]} isSubmitted={isSubmitted} boxIndex={i} />
                    </div>
                )

            })}
        </div>
    )

};

export default RowForGuessing