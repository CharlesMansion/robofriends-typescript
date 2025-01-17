import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';


interface IRobots {
 robots : Array<IRobot>
}

const CardList: React.SFC<IRobots> = (props) => {
  const {robots} = props;
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;