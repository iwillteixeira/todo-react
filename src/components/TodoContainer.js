import React from 'react';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  items = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  }

  render() {
    return (
      <TodosList todo={this.items.todos} />
    );
  }
}
export default TodoContainer;
