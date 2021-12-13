import React from 'react';
import Clock from './Clock';

const Example6 = () => {
  const [show, setShow] = React.useState(false);
  const atClick = () => {
    setShow(!show);
  };

  return (
    <section data-name="Example7">
      <button
        className="my-btn d-block"
        onClick={atClick}
      >
        switch Clock
      </button>
      {show && <Clock />}
    </section>
  );
};
export default Example6;
