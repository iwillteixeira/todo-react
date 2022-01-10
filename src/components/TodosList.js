import React from 'react';

export default class TodosList extends React.Component {
  construcor(props) {
    this.state = [];
  }

  render() {
    return (
      <ul>
        {this.props.todo.map((e) => (
          <li>{e.title}</li>
        ))}
      </ul>
    );
  }
}
