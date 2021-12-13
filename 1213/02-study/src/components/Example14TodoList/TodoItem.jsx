import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { id, done, children, onToggleItem } = props;
  /* const onClick = () => {
    onToggleItem(id);
  };
  let className = 'todo-item';
  if (done) {
    className += ' done';
  } */
  return (
    <section data-name="TodoItem" className="style-3">
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </section>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

export default TodoItem;
