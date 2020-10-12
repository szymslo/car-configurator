import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import './index.css'
import Context from '../../store/context'

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

const Engines = () => {
  const { loading, error, data } = useQuery(ENGINES);
  const {carDispatch} = useContext(Context);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="dropdown">
      <label htmlFor="engines">Engine</label>
      <select name="engines" onChange={(event) => carDispatch({type: "SET_ENGINE", payload: event.target.value})}>
        <option disabled selected hidden>Choose engine</option>
        {data.engines.map((engine) => (
          <option key={engine.id} value={engine.id}>
            {engine.name} {engine.horsepower} kW {engine.capacity} l
          </option>
        ))}
      </select>
    </div>
  );
};

export default Engines;
