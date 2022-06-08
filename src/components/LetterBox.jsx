import React from 'react';


const LetterBox = ({ letterArray, typedLetter, isSubmitted, boxIndex }) => {

    let bgColor = 'bg-black'

    if (isSubmitted) {
        if (letterArray[boxIndex] === typedLetter) {
            bgColor = 'bg-green-400'
        } else if (letterArray.includes(typedLetter)) {
            bgColor = 'bg-yellow-400'
        }
    }

    return (
        <div className={`border-2 w-12 h-12 ${bgColor}`}>
            {typedLetter}
        </div >
    )

};

export default LetterBox