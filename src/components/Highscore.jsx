import React from "react";

const HighScore = ({ word }) => {

    return (
        <div>

            <p>High Score: {word.highScoreName} with {word.highScore} attempts!</p>

        </div>
    )

}

export default HighScore;