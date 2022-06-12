import React, { useState } from "react";

export function ViewComments() {

    //TODO, get array of comments associated with username

    //test data in useState
    const [commentArray, setCommentArray] = useState([
        { text: 'test comment 1', award: 5 }, { text: 'test comment 2', award: 7 }, { text: 'test comment 1', award: 9 }])

    function deleteComment() {
        //     //TODO: delete comment
    }

    return (
        <div className="App bg-gradient-to-tl from-black to-gray-500 h-screen w-screen text-white" >

            <div className="h-[50px] w-screen text-transparent bg-clip-text bg-gradient-to-br from-[#ff8300] to-[#00d8ff] border-b-4 border-b-indigo-500 flex justify-center items-center text-4xl font-extrabold mb-4">
                Your Comments
            </div>

            {commentArray.map(
                function (comment) {
                    return (<div className='mb-4 rounded bg-gray-600 text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1 w-1/2 m-auto divide-y'>
                        <p>{comment.text}</p>
                        <div className='text-sm'>
                            <p>Awarded {comment.award} times</p>
                            <button className='rounded border-2 text-red-300' onClick={deleteComment}>Delete Comment</button>
                        </div>

                    </div>)
                }
            )
            }
        </div >
    )

}

