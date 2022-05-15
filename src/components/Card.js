import React from 'react';

const Card = (props) => {
  const { name, id, email } = props;
  return (
    <div className="bg-light-green tc br3 pa3 ma2 dib bw2 shadow-5 grow ">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
