import React, { useContext } from "react";
import { useQuery, useApolloClient, gql } from "@apollo/client";
import './index.css';
import Context from '../../store/context';

const ENGINES = gql`
  query GetEngines {
    engines {
      id
      name
      horsepower
      capacity
      price
    }
  }
`;

const Engines = () => {
  const { loading, error, data } = useQuery(ENGINES);
  const { carState, carDispatch } = useContext(Context);
  const client = useApolloClient();
  let filteredData = [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  if (carState.isModelSelected) {
    const car = client.readFragment({
      id: `Car:${carState.carId}`,
      fragment: gql`
        fragment carp on Car {
          power
        }
      `,
      fragmentName: "carp",
    });

    if (car.power <= 1) {
      filteredData = data.engines.filter((engine) => {
        return engine.horsepower < 90;
      });
    } 
    else if (1 < car.power < 5) {
      filteredData = data.engines.filter((engine) => {
        return engine.horsepower >= 80 && engine.horsepower <= 140;
      });
    }
    if (car.power >= 5) {
      filteredData = data.engines.filter((engine) => {
        return engine.horsepower > 130;
      });
    }

    return (
      <div className="dropdown">
        <label htmlFor="engines">Engine</label>
        <select
          name="engines"
          onClick={(event) =>
            carDispatch({ type: "SET_ENGINE", payload: event.target.value })
          }
        >
          <option selected hidden>
            Choose engine
          </option>
          {filteredData.map((engine) => (
            <option key={engine.id} value={engine.id}>
              {engine.name} {engine.horsepower} kW {engine.capacity} l
            </option>
          ))}
        </select>
      </div>
    );
  }
  return null;
};

export default Engines;
