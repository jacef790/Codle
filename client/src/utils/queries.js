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

export const QUERY_LOGIN = gql`
    query QueryLogin ($username: String!, $password: String!){
        QueryLogin (username: $username, password: $password) {
            username
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