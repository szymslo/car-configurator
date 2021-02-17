import React, { useContext } from "react";
import { useApolloClient, gql } from "@apollo/client";
import Context from '../../store/context'
import './index.css'
import {ReactComponent as City} from './svg/city.svg'
import {ReactComponent as Compact} from './svg/compact.svg'
import {ReactComponent as Terrain} from './svg/terrain.svg'
import {ReactComponent as Sport} from './svg/sport.svg'
import {ReactComponent as Race} from './svg/race.svg'

const View = () => {

  const client = useApolloClient();
  const {carState} = useContext(Context);
  let finalprice = 0;

  const car = client.readFragment({
    id: `Car:${carState.carId}`,
    fragment: gql`
      fragment car on Car {
        name
        power
        price
      }
    `,
    fragmentName: "car",
    });

  if(carState.isEngineSelected) {

    const engine = client.readFragment({
      id: `Engine:${carState.engineId}`,
      fragment: gql`
        fragment engine on Engine {
          name
          horsepower
          capacity
          price
        }
      `,
      fragmentName: "engine",
    });

    if(carState.isGearboxSelected) {

      finalprice = car.price + engine.price;

      if (carState.gearbox === 'Manual') {
        finalprice += 1000;
      }
      else if(carState.gearbox === 'Automatic') {
          finalprice +=  2500;
      }

      return (
        <div>
          <h4>Summary</h4>
            {car.power <= 1 &&
              <City className="picture" fill={carState.color} stroke="black"></City>
            }
            {car.power === 2 &&
              <Compact className="picture" fill={carState.color} stroke="black"></Compact>
            }
            {car.power === 3 &&
              <Terrain className="picture" fill={carState.color} stroke="black"></Terrain>
            }
            {car.power === 4 &&
              <Sport className="picture" fill={carState.color} stroke="black"></Sport>
            }
            {car.power >= 5 &&
              <Race className="picture" fill={carState.color} stroke="black"></Race>
            }
        <div className="info">
          <p className="text">{`Model: ${car.name}`}</p>
          <p className="text">{`Engine: ${engine.name} ${engine.horsepower}kW ${engine.capacity}l`}</p>
          <p className="text">{`Gearbox: ${carState.gearbox}`}</p>
        </div>
          <h2 className="price">{finalprice} $ </h2>
      </div>
          )
    }

    return (
      <div>
        <h4>Summary</h4>
        {car.power <= 1 &&
          <City className="picture" fill={carState.color} stroke="black"></City>
        }
        {car.power === 2 &&
          <Compact className="picture" fill={carState.color} stroke="black"></Compact>
        }
        {car.power === 3 &&
          <Terrain className="picture" fill={carState.color} stroke="black"></Terrain>
        }
        {car.power === 4 &&
          <Sport className="picture" fill={carState.color} stroke="black"></Sport>
        }
        {car.power >= 5 &&
          <Race className="picture" fill={carState.color} stroke="black"></Race>
        }
        <div className="info">
          <p className="text">{`Model: ${car.name}`}</p>
          <p className="text">{`Engine: ${engine.name} ${engine.horsepower}kW ${engine.capacity}l`}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h4>Summary</h4>
      {car.power <= 1 &&
        <City className="picture" fill={carState.color} stroke="black"></City>
      }
      {car.power === 2 &&
        <Compact className="picture" fill={carState.color} stroke="black"></Compact>
      }
      {car.power === 3 &&
          <Terrain className="picture" fill={carState.color} stroke="black"></Terrain>
      }
      {car.power === 4 &&
        <Sport className="picture" fill={carState.color} stroke="black"></Sport>
      }
      {car.power >= 5 &&
        <Race className="picture" fill={carState.color} stroke="black"></Race>
      }
      <div className="info">
        <p className="text">{`Model: ${car.name}`}</p>
      </div>
    </div>
  )
}

export default View;
