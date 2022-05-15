import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { robots } = props;
  if (true) {
    throw new Error('NOOOOOOOOO');
  }
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            id={robot.id}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
