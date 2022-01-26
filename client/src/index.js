import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
    uri: '/admin/api',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'));
