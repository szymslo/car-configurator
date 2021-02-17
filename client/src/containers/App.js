import React, { useContext } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.scss';
import Cars from '../components/Cars';
import Engines from '../components/Engines';
import Gearboxes from '../components/Gearboxes';
import Colors from '../components/Colors';
import View from './View/index';
import Context from '../store/context';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {

  const {carState} = useContext(Context);

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="box">
          <div className="configurator">
            <Cars/>
            <Engines/>
            <Gearboxes/>
            <Colors/>
          </div>
          <div className="view">
            {carState.isModelSelected &&
              <View/>
            }
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
