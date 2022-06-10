import React from "react";
import { useState } from 'react';

const AddComment = ({ word }) => {

    const [textField, setTextField] = useState('')

    function handleChange(event) {
        setTextField(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('buttonpressed')
        console.log(textField)
        //TODO add textField to comments on word, generating new comment
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