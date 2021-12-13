import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
  const { onAddItem } = props;
  const [input, setInput] = React.useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    onAddItem(input);
    setInput('');
  };

  /* const [input, setInput] = React.useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    onAddItem(input);
    setInput('');
  }; */

  return (
    <section className="style-1" data-name="TodoForm.js">
      <form className="todo-form" onSubmit={atSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      {/* <form className="todo-form" onSubmit={atSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </form> */}
    </section>
  );
};
TodoForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
export default TodoForm;
