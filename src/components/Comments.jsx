import React from "react";

const Comments = ({ word }) => {

    return (
        <div>

            {word.comments.map((comment) => {

                <div>
                    <div>{comment.account}</div>
                    <div>{comment.content}</div>
                </div>
            })}

        </div >
    )

}

export default Comments;