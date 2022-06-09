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
        <div>

            {wordComments.map((comment) => {
                return (
                    <div>
                        <div>{comment.account}</div>
                        <div>{comment.content}</div>
                        <button onClick={addAward}>Grant your award! Awards: {comment.award}</button>
                    </div>
                )
            })}

        </div >
    )

}

export default Comments;