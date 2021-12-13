import React from 'react';

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

  return (
    <section className="style-1" data-name="TodoForm.js">
      <form className="todo-form" onSubmit={atSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
    </section>
  );
};
export default TodoForm;
