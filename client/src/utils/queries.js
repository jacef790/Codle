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
    query comments ($word: String!){
        comments (word: $word) {
            content
            account {
                username
            }
            _id
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
            account{
            username
            _id
            }
            token
      }
    }
`;

export const QUERY_WORD = gql`
query word {
    word {
      _id
      characters
      comments {
        account {
          username
        }
        content
      }
      highScore
      highScoreName
    }
  }
`;