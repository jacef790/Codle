import { useMutation, useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';
import { ADD_COMMENT } from '../utils/mutations';
import { REMOVE_COMMENT } from '../utils/mutations';

const Comment = () => {
    const commentList = useQuery(QUERY_COMMENTS);

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const addNewComment = async (newComment) => {
        try {
            await addComment({
                variables: { content: newComment },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const [removeComment] = useMutation(REMOVE_COMMENT);

    const commentRemoval = async (commentTarget) => {
        // try {
        // const temp = commentList;
        // const temp2 = temp.filter(temp => temp[i] != commentTarget);
        // commentList = temp2;

        // await removeComment({

        // });
        // } catch (err) {
        //     console.error(err);
        // }
    };

    return (commentList, addNewComment, commentRemoval);
};

export default Comment;