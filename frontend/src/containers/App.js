import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Cars from "../components/Cars";
import Engines from "../components/Engines";
import Gearboxes from "../components/Gearboxes";
import Colors from "../components/Colors"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="box">
          <div className="configurator">
            <Cars />
            <Engines />
            <Gearboxes/>
            <Colors/>
          </div>
          <div className="view">
            <h4>Tu będzie podgląd</h4>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
