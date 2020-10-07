import React from 'react';
import { useQuery, gql } from "@apollo/client";

const CAR = gql`
  query GetCar($id: String!) {
    car(id: $id) {
      name
      power
      price
    }
  }
`;

const View = (props) => {

    const id = props.id;

    const { loading, error, data } = useQuery(CAR, {variables: {id}});
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>

    return (
        <div>
            <h2>{data.car.price}</h2>
        </div>
    )
  }

  export default View;