import React, { useState } from "react";

const Comments = ({ word }) => {

    //replace this with actual data, "word.comments", used for testing
    let wordComments = [
        {
            account: 'account1',
            content: 'JSEAR is the best',
            award: 9
        }
    ]

    const [awarded, setAwarded] = useState(false);

    function addAward() {
        if (awarded) {
            return;
        }
        setAwarded(true);
        //TODO: increment comment award by 1
    }

    return (
        <div >

            {wordComments.map((comment) => {
                return (
                    <div className='mb-4 rounded bg-gray-600 text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1 w-1/2 m-auto divide-y'>
                        <div className='ml-6 m-2'>{comment.account}</div>
                        <div className='text-center text-6xl m-2'>{comment.content}</div>
                        <button className='text-center m-auto w-[99%] text-green-400 m-2' onClick={addAward}>Grant your award! Awards: {comment.award}</button>
                    </div>
                )
            })}

        </div >
    )

}

export default Comments;