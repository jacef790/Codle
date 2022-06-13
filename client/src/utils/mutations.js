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
mutation AddAccount ($username: String!, $password: String!) {
    addAccount (username: $username, password: $password){
        account{
            username
            _id
            }
            token
  }
}
`;

export const ADD_COMMENT = gql`
    mutation addComment($word: String!, $content: String!, $account: String!) {
        addComment(word: $word, content: $content, account: $account) {
            content
    }
}
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($word: String, $comment: String) {
        removeComment(word: $word, comment: $comment) {
            content
        }
    }
`;