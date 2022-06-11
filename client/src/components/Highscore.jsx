import React from "react";

const HighScore = ({ word }) => {

    return (
        // do not add side margins. idk why but it breaks
        <div className='mt-4 mb-4 rounded bg-gray-600 text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1 w-1/2 m-auto'>

            <p>High Score: {word.highScoreName} with {word.highScore} attempts!</p>

        </div>
    )

}

export default HighScore;