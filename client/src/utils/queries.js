import { gql } from '@apollo/client';

export const QUERY_ACCOUNTS = gql`
    query accounts {
        account{
            username
            password
            comments
        }
    }
`;

export const QUERY_COMMENTS = gql`
    query comments {
        comment {
            content
            account
            word
        }
    }
`;

export const QUERY_WORDS = gql`
    query words {
        word {
            _id
            characters
            highScore
            highScoreName
            comments
        }
    }
`;

export const QUERY_ACCOUNT = gql`
    query account($username: String) {
        account(username: $username) {
            username
            password
            comments
        }
    }
`;

export const QUERY_WORD = gql`
    query word {
        word {
            characters
            highScore
            highScoreName
            comments
        }
    }
`;