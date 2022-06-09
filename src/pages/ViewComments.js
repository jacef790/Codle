import React, { useState } from "react";

function ViewComments() {

    //TODO, get array of comments associated with username

    //test data in useState
    const [commentArray, setCommentArray] = useState(['test comment 1', 'test comment 2', 'thank you for reading these test comments'])

    return (
        <div>
            {commentArray.map(
                function (comment) {
                    return (<div>
                        <p>{comment}</p>

                    </div>)
                }
            )}
        </div>
    )

}

export default ViewComments;