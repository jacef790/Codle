import React from 'react'

const WordForGuessing = ({ word }) => {
    let upperWord = word.toUpperCase();

    let letterArray = upperWord.split('');

    return (
        <div>
            {letterArray.map((el) => {
                return (
                    <div>
                        {el}
                    </div>
                )

            })}
        </div>
    )

}