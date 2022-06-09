import React from "react";

const Comments = ({ word }) => {

    //replace this with actual data, "word.comments", used for testing
    let wordComments = [
        {
            account: 'account1',
            content: 'JSEAR is the best'
        }
    ]

    return (
        <div>

            {wordComments.map((comment) => {

                <div>
                    <div>{comment.account}</div>
                    <div>{comment.content}</div>
                </div>
            })}

        </div >
    )

}

export default Comments;