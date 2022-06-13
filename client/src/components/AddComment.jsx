import React from "react";
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client'
import { ADD_COMMENT } from "../utils/mutations";


const AddComment = ({ word, onAddComment }) => {

    const [textField, setTextField] = useState('')

    const [addComment, { error, data }] = useMutation(ADD_COMMENT);

    function handleChange(event) {
        setTextField(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = addComment({
                variables: {
                    content: textField,
                    account: JSON.parse(localStorage.getItem('Codleid')),
                    word: word._id
                }
            })
            onAddComment();
        } catch (e) {
            console.error(e);
            return;
        }



    }

    return (
        <div className='mt-4 mb-4 rounded bg-gray-600 text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1 w-1/2 m-auto'>

            <form onSubmit={handleSubmit}>
                <label>
                    <input className='rounded text-black p-2 h-20 w-2/3' type="textarea" value={textField} onChange={handleChange} />
                </label>
                <input className='ml-4' type="submit" value="Add Comment" />
            </form>

        </div >
    )

}

export default AddComment;