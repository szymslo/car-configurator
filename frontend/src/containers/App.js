import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import Car from '../components/Cars'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="configurator">
          <Car/>
        </div>
        <div className="view">
          <h4>Tu będzie podgląd</h4>
        </div>
      </div>
    </ApolloProvider>

  );
}

export default App;
