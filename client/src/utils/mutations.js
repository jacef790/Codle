import { gql } from '@apollo/client';

export const ADD_WORD = gql`
    mutation addWord($newWord: String) {
        addWord(word: $newWord) {
            _id
            characters
        }
    }
`;

export const ADD_ACCOUNT = gql`
    mutation addAccount($username: String) {
        addAccount(username: $username) {
            username
            password
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($word: String, $comment: String) {
        addComment(word: $word, content: $comment) {
            content
            account
            word
        }
    }
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($word: String, $comment: String) {
        removeComment(word: $word, content: $comment) {
            content
            account
            word
        }
    }
`;