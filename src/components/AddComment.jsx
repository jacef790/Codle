import React from "react";
import { useState } from 'react';

const AddComment = ({ word }) => {

    const [textField, setTextField] = useState('')

    function handleChange(event) {
        setTextField(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(textField)
        //TODO add textField to comments on word 
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={textField} onChange={handleChange} />
                </label>
                <input type="submit" value="Add Comment" />
            </form>

        </div >
    )

}

export default AddComment;