import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.URI,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));
