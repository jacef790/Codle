import React from 'react';


const LetterBox = ({ letterArray, typedLetter, isSubmitted, boxIndex }) => {

    let bgColor = 'bg-black'

    if (isSubmitted) {
        if (letterArray[boxIndex] === typedLetter) {
            bgColor = 'bg-[#43ed36]'
        } else if (letterArray.includes(typedLetter)) {
            bgColor = 'bg-[#FFAD00]'
        } 
    }

    return (
        <div className={`h-[100px] w-[100px] border-4 border-[#0DE2FF] text-6xl font-bold flex justify-center items-center ${bgColor}`}>
            {typedLetter}
        </div >
    )

};

export default LetterBox