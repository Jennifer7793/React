/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './app.scss';

// TODO: 1 start
class MyComponent extends React.Component {
  render() {
    return <div className="my-component">這是ReactComponent組件</div>;
  }
}
const FunctionalComponent = () => {
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br />
      今天日期：
      {new Date().toDateString()}
    </div>
  );
};
// TODO: 1 end

const Example2 = () => {
  return (
    <section data-name="Example2">
      <MyComponent />
      <FunctionalComponent />
    </section>
  );
};
export default Example2;
