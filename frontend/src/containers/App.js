import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import "./App.scss";
import Cars from "../components/Cars";
import Engines from "../components/Engines";
import Gearboxes from "../components/Gearboxes";
import Colors from "../components/Colors"
import View from "../components/View"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const selectCar = (e) => {
  console.log("Car selected: (ID) " + e.target.value);
};

const selectEngine = (e) => {
  console.log("Engine selected: (ID) " + e.target.value);
};

const selectGearbox= (e) => {
  console.log("Gearbox selected: " + e.target.value);
};

const selectColor = (e) => {
  console.log("Color selected: " + e.target.value);
};

const App = () => {
  const id = "5f7c9170ed121a147c12422c";

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="box">
          <div className="configurator">
            <Cars onCarSelected={selectCar}/>
            <Engines onEngineSelected={selectEngine}/>
            <Gearboxes onGearboxSelected={selectGearbox}/>
            <Colors onColorSelected={selectColor}/>
          </div>
          <div className="view">
            <View id={id}/>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
