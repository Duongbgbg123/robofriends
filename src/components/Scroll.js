import React from 'react';

const Scroll = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        overflow: 'scroll',
        height: '100vh',
        border: '5px solid black',
        scrollbarWidth: 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
