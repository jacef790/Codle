import React, { useState, useImperativeHandle } from "react";
import { QUERY_COMMENTS } from "../utils/queries";
import { useMutation, useQuery } from '@apollo/client'

const Comments = React.forwardRef(({ word }, ref) => {

    const { data: data2, refetch } = useQuery(QUERY_COMMENTS, {
        variables: {
            word: word._id
        }
    });

    useImperativeHandle(ref, () => {
        return { refetch }
    })

    console.log(data2);

    let wordComments = data2?.comments;

    const [awarded, setAwarded] = useState(false);

    const addAward = () => {
        if (awarded) {
            return;
        }
        setAwarded(true);
        //TODO: increment comment award by 1
    }

    return (
        <div >

            {wordComments?.map((comment) => {
                return (
                    <div className='mb-4 rounded bg-gray-600 text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1 w-1/2 m-auto divide-y' key={comment.content}>
                        <div className='ml-6 m-2'>{comment.account.username}</div>
                        <div className='text-center text-6xl m-2'>{comment.content}</div>
                        <button className='text-center m-auto w-[99%] text-green-400 m-2'
                        // onClick={addAward}
                        >Grant your award! Awards: {comment.award}</button>
                    </div>
                )
            })}

        </div >
    )

}
)

export default Comments;