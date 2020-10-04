import React from "react";
import { useQuery, gql } from "@apollo/client";

const CARS = gql`
  query GetCars {
    cars {
      name
      power
    }
  }
`;

const Cars = () => {
  const { loading, error, data } = useQuery(CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return data.cars.map( ({name, power}) => (
    <div key={name}>
      <p>
        {name}: {power}
      </p>
    </div>
  ));
};

export default Cars;
