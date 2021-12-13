import React from 'react';
import './app.scss';

const Example6 = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  let boxClassName = 'box';
  if (isGreen) {
    boxClassName += ' style-green';
  }
  return (
    <section data-name="Example6StyleClassBind">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      <div className={boxClassName} />
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: isGreen ? 'green' : 'red',
          display: isGreen ? 'block' : 'none',
        }}
      />
    </section>
  );
};
export default Example6;
