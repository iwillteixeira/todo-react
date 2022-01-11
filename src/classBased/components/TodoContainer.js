import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const jsonDataLocal = JSON.parse(localStorage.getItem('todos'));
    if (jsonDataLocal) {
      this.setState({
        todos: jsonDataLocal,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  clicked = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter((e) => e.id !== id)],
    });
  }

  addTodoItem = (title) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: uuidv4(), title, completed: false }],
    });
  }

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.map((e) => {
        if (e.id === id) {
          e.title = updatedTitle;
        }
        return e;
      })],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addItems={this.addTodoItem} />
          <TodosList
            todos={todos}
            clicked={this.clicked}
            del={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
