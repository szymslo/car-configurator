import React from "react";
import { useQuery, gql } from "@apollo/client";
import './index.css'

const ENGINES = gql`
  query GetCars {
    engines {
      id
      name
      horsepower
      capacity
      price
    }
  }
`;

const onEngineSelected = () => {
  console.log("car selected");
};

const Cars = () => {
  const { loading, error, data } = useQuery(ENGINES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="dropdown">
      <label htmlFor="engines">Choose engine </label>
      <select name="engines" onChange={onEngineSelected}>
        {data.engines.map((engine) => (
          <option key={engine.id} value={engine.name}>
            {engine.name} {engine.horsepower} kW {engine.capacity} l
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cars;
