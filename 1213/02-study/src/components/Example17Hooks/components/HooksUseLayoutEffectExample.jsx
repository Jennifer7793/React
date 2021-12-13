import React from 'react';
import { css } from '@emotion/css';

const messageStyle = css`
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 16px;
  background-color: #2980b9;
  border-bottom: 10px solid #3498db;
  color: white;
  transform: translateX(-50%);
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: -17px;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 17.3px 10px;
    border-color: transparent transparent #2980b9 transparent;
  }
`;
const Message = (props) => {
  const { boxRef } = props;
  const [style, setStyle] = React.useState({});
  //*
  React.useEffect(() => {
    // Bad
    const rect = boxRef.current.getBoundingClientRect();
    setStyle({
      top: `${rect.height + 30}px`,
      left: `${rect.width * 0.5}px`,
    });
  }, []);
  // */
  /*
  React.useLayoutEffect(() => {
    // Good
    const rect = boxRef.current.getBoundingClientRect();
    setStyle({
      top: `${rect.height + 30}px`,
      left: `${rect.width * 0.5}px`,
    });
  }, []);
  // */

  return (
    <div style={style} className={messageStyle}>
      React useLayoutEffect.
    </div>
  );
};
const HooksUseLayoutEffectExample = () => {
  const [show, setShow] = React.useState(false);
  const boxRef = React.useRef(null);

  return (
    <section data-name="HooksUseLayoutEffectExample" className="text-center" style={{ paddingBottom: 160 }}>
      <div className="position-relative d-inline-block">
        <button className="my-btn" ref={boxRef} onClick={() => setShow((prev) => !prev)}>
          Click me
        </button>
        {show && <Message boxRef={boxRef} />}
      </div>
    </section>
  );
};

export default HooksUseLayoutEffectExample;
