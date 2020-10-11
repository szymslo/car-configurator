import React from "react";
import { useApolloClient, gql } from "@apollo/client";

const View = (props) => {

  const client = useApolloClient();

  const car = client.readFragment({
    id: `Car:${props.id}`,
    fragment: gql`
      fragment car on Car {
        name
        power
        price
      }
    `,
    fragmentName: "car",
    });

    return (
      <div>
        <p>{car.name}</p>
        <p>{car.price}</p>
      </div>
    )

}

export default View;
