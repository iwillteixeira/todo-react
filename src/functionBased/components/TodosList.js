/* eslint react/prop-types: off */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, clicked, del, setUpdate,
  } = props;

  return (
    <ul>
      {todos.map((e) => (
        <TodoItem key={e.id} todo={e} clicked={clicked} del={del} setUpdate={setUpdate} />
      ))}
    </ul>
  );
};

export default TodosList;
