/* eslint react/prop-types: off */
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { addItems } = this.props;
    const { title } = this.state;
    e.preventDefault();
    if (title.trim()) {
      addItems(title);
      this.setState({
        title: '',
      });
    } else {
      alert('invalid');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Enter your tasks here" className="input-text" name="title" value={title} onChange={this.inputChange} />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
