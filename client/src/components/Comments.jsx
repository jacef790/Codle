import React, { useState, useImperativeHandle } from "react";
import { QUERY_COMMENTS } from "../utils/queries";
import { useMutation, useQuery } from '@apollo/client'
import { REMOVE_COMMENT } from "../utils/mutations";

const Comments = React.forwardRef(({ word }, ref) => {

    const { data: data2, refetch } = useQuery(QUERY_COMMENTS, {
        variables: {
            word: word._id
        }
    });

    useImperativeHandle(ref, () => {
        return { refetch }
    })

    const [_deleteComment, { data, error }] = useMutation(REMOVE_COMMENT)

    async function deleteComment(id) {
        await _deleteComment({
            variables: {
                comment: id,
                word: word._id
            }
        });

        refetch();


    }

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
                        {JSON.parse(localStorage.getItem('CodleUsername')) === comment.account.username && (
                            <button className='rounded border-2 text-red-300' onClick={() => (deleteComment(comment._id))}>Delete Comment</button>)
                        }
                    </div>
                )
            })}

        </div >
    )

}
)

export default Comments;