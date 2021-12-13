import React from 'react';

const Clock = () => {
  React.useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  );
};
export default Clock;
