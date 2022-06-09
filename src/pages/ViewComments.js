import React, { useState } from "react";

function ViewComments() {

    //TODO, get array of comments associated with username

    //test data in useState
    const [commentArray, setCommentArray] = useState([
        { text: 'test comment 1', likes: 5 }, { text: 'test comment 2', likes: 7 }, { text: 'test comment 1', likes: 9 }])

    return (
        <div>
            {commentArray.map(
                function (comment) {
                    return (<div>
                        <p>{comment.text}</p>
                        <p>likes {comment.likes}</p>
                        <button>Delete Comment</button>

                    </div>)
                }
            )}
        </div>
    )

}

export default ViewComments;