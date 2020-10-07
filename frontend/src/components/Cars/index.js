import React from "react";
import { useQuery, gql } from "@apollo/client";
import './index.css'

const CARS = gql`
  query GetCars {
    cars {
      id
      name
      power
      price
    }
  }
`;

const Cars = (props) => {
  const { loading, error, data } = useQuery(CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="dropdown">
      <label htmlFor="cars">Choose a car type </label>
      <select name="cars" onChange={props.onCarSelected}>
        {data.cars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cars;
