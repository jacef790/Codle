
import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Account from './pages/Account';
// import Comment from './pages/Comment';
// import Login from './pages/Login';
import RunGame from './pages/RunGame';
// import ViewComments from './pages/ViewComments';
// import Word from './pages/Word';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<RunGame />}
          />
          {/* <Route
            path="/login"
            element={<Login />}
          /> */}
          {/* <Route
            path="/signup"
            element={<Account />}
          />
          <Route
            path="/comment"
            element={<Comment />}
          />
          <Route
            path="/word"
            element={<Word />}
          /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  )
}






export default App;


