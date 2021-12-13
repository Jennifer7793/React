import React from 'react';
import PropTypes from 'prop-types';

const FunctionalCard = (props) => {
  const { img, name, children } = props;
  return (
    <div className="card">
      <img className="img" src={img} alt={name} />
      <div className="name">
        name:
        {name}
      </div>
      <div className="quote">
        quote:
        {children}
      </div>
    </div>
  );
};
FunctionalCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropType.node,
};

const Example3 = () => {
  return (
    <section data-name="Example3">
      <FunctionalCard img="http://fakeimg.pl/300x100/ecf0f1/" name="milkmidi" />
      <FunctionalCard img="http://fakeimg.pl/240x80/ecf0f1/" name="奶綠茶">
        <h1>我是子元素</h1>
      </FunctionalCard>
    </section>
  );
};
export default Example3;
