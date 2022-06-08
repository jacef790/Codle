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
        <div className={`md:h-[100px] md:w-[100px] h-[50px] w-[50px] border-4 border-[#0DE2FF] md:text-6xl text-xl font-bold flex justify-center items-center ${bgColor}`}>
            {typedLetter}
        </div >
    )

};

export default LetterBox