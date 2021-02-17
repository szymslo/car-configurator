import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import './index.css'
import Context from '../../store/context'

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

const Cars = () => {
  const { loading, error, data } = useQuery(CARS);
  const {carDispatch} = useContext(Context);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="dropdown">
      <label htmlFor="cars">Car model</label>
      <select name="cars" onChange={(event) => carDispatch({type: "SET_MODEL", payload: event.target.value})}>
        <option disabled selected hidden>Choose a car model</option>
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
