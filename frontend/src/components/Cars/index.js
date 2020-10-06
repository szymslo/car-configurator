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

const onCarSelected = () => {
  console.log("car selected");
};

const Cars = () => {
  const { loading, error, data } = useQuery(CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="dropdown">
      <label htmlFor="cars">Choose a car type </label>
      <select name="cars" onChange={onCarSelected}>
        {data.cars.map((car) => (
          <option key={car.id} value={car.name}>
            {car.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cars;
