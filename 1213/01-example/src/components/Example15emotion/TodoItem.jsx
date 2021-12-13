import React from 'react';
import { css } from '@emotion/css';

const style = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 24px 12px;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s;
  animation: show 0.3s ease-in-out;
  &[data-active='true'] {
    text-decoration: line-through;
    color: #888;
    background-color: #f6f6f6;
  }
`;
const TodoItem = (props) => {
  const { id, done, children, onToggleItem } = props;
  const onClick = () => {
    onToggleItem(id);
  };
  return (
    <section data-name="TodoItem" className="style-3">
      <button data-active={done} className={style} onClick={onClick}>
        {children}
      </button>
    </section>
  );
};

export default TodoItem;
