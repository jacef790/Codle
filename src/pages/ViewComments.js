import React, { useState } from "react";

function ViewComments() {

    //TODO, get array of comments associated with username

    //test data in useState
    const [commentArray, setCommentArray] = useState([
        { text: 'test comment 1', award: 5 }, { text: 'test comment 2', award: 7 }, { text: 'test comment 1', award: 9 }])

    function deleteComment() {
        //TODO: delete comment
    }

    return (
        <div>
            {commentArray.map(
                function (comment) {
                    return (<div>
                        <p>{comment.text}</p>
                        <p>likes {comment.award}</p>
                        <button onClick={deleteComment}>Delete Comment</button>

                    </div>)
                }
            )}
        </div>
    )

}

export default ViewComments;