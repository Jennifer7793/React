import React from 'react';

/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

const Counter = () => {
  /* const [count, setCount] = React.useState(0);
  const atClick = () => {
    setCount(count + 1);
  }; */
  return (
    <div className="counter">
      <div className="count">
        count:
        {count}
      </div>
      <button className="my-btn" onClick={atClick}>increment</button>
    </div>
  );
};

const Example4 = () => {
  return (
    <section data-name="Example4">
      <Counter />
    </section>
  );
};
export default Example4;
